export const manageCoursePromise=(email)=>{
    return fetch (`
https://course-management-server-mu.vercel.app/courses?email=${email}`).then(res=>res.json())
}