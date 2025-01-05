import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, RTE, Input, Select } from "../index"
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";

//This method will watch specified inputs and return their values.  = watch 

export default function PostForm({ post }) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues, control, watch } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || "active",

    },
  });

  const userData = useSelector((state) => state.auth.userData)
  const Sumbit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbpost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined
      });

      if (dbpost) {
        navigate(`/post/${dbpost.$id}`);

      }


    }
    else {
      const file = await appwriteService.updatePost(data.image[0]);

      if (file) {
        const fileid = file.$id;
        data.featuredImage = fileid;
        const dbpost = await appwriteService.CreatePost({
          ...data,
          userId: userData.$id,
        })
        if (dbpost) {
          navigate(`/post/${dbpost.$id}`)
        }

      }
    }
  }

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === "string")
      return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, "-")
      .replace(/\s/g, "-");

   return '';   
    
  },[])

  React.useEffect(()=>{
    const subscription = watch((value, { name }) => {
      if (name === "title") {
          setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
  });

  return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue]);
  

  return (
    <form onSubmit={handleSubmit(Sumbit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}
