import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosinterceptor';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    axiosInstance.get('/blog')
    .then(res=>setBlogs(res.data))
    // .then(res=>console.log(res))

    .catch(err=>console.log(err))
  },[])
  function updateData(val){
    navigate('/addblog',{state:{val}})
  }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axiosInstance.delete(`/blog/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            alert('Blog deleted successfully!');
            setBlogs(blogs.filter(blog => blog._id !== id)); 
          } else {
            alert('Failed to delete blog');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('An error occurred while deleting the blog');
        });
    }
  };
  

  return (
    <Box sx={{ flexGrow: 1, padding: 4, justifyContent:'center' }}>
      <Typography variant="h4" align="center" gutterBottom>
        BLOGS
      </Typography>
    <Grid container spacing={2} justifyContent="center">

      {blogs.map((blog, index) => (

    <Grid item xs={12} md={3} key={index}>
      <Card sx={{ maxWidth: 600 ,backgroundColor:'#E5E1DA',justifyContent: 'center',boxShadow:'0 1px 2px black' }}>
        <CardMedia
          sx={{ height: 190 , width:300}}
          image={blog.imageurl}
          title={blog.title}
        />
        <CardContent sx={{ textAlign: 'center' }} >
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
        <CardActions  sx={{ justifyContent: 'center' }}>
          <Button  sx={{ backgroundColor: 'green',color:'white',fontWeight:'600' }} onClick={()=>{
            updateData(blog)
          }}>UPDATE</Button>
          <Button sx={{ backgroundColor: 'red',color:'white',fontWeight:'600' }}   onClick={() => handleDelete(blog._id)}>DELETE</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

  </Box>
  )
}

export default Blog












// import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from './axiosinterceptor';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const navigate=useNavigate()
//   useEffect(()=>{
//     axiosInstance.get('http://localhost:3000/blog')
//     .then(res=>setBlogs(res.data))
//     // .then(res=>console.log(res))

//     .catch(err=>console.log(err))
//   },[])
//   function updateData(val){
//     navigate('/addblog',{state:{val}})
//   }
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this blog?")) {
//       axiosInstance.delete(`http://localhost:3000/blog/delete/${id}`)
//         .then((res) => {
//           if (res.status === 200) {
//             alert('Blog deleted successfully!');
//             setBlogs(blogs.filter(blog => blog._id !== id)); 
//           } else {
//             alert('Failed to delete blog');
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//           alert('An error occurred while deleting the blog');
//         });
//     }
//   };
  

//   return (
//     <Box sx={{ flexGrow: 1, padding: 4, justifyContent:'center' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         BLOGS
//       </Typography>
//     <Grid container spacing={2} justifyContent="center">

//       {blogs.map((blog, index) => (

//     <Grid item xs={12} md={3} key={index}>
//       <Card sx={{ maxWidth: 600 ,backgroundColor:'#E5E1DA',justifyContent: 'center',boxShadow:'0 1px 2px black' }}>
//         <CardMedia
//           sx={{ height: 190 , width:300}}
//           image={blog.imageurl}
//           title={blog.title}
//         />
//         <CardContent sx={{ textAlign: 'center' }} >
//           <Typography gutterBottom variant="h5" component="div">
//             {blog.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {blog.description}
//           </Typography>
//         </CardContent>
//         <CardActions  sx={{ justifyContent: 'center' }}>
//           <Button  sx={{ backgroundColor: 'green',color:'white',fontWeight:'600' }} onClick={()=>{
//             updateData(blog)
//           }}>UPDATE</Button>
//           <Button sx={{ backgroundColor: 'red',color:'white',fontWeight:'600' }}   onClick={() => handleDelete(blog._id)}>DELETE</Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   ))}
// </Grid>

//   </Box>
//   )
// }

// export default Blog




































































































// import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const blog = () => {
//   const[cardData,setData]=useState([]);
//   const navigate=useNavigate();
// useEffect(()=>{
//   axios.get('http://localhost:3000/blog')
//   .then(res=>setData(res.data))
//   .catch(err =>console.log(err));
// },[]);
// function updateData(val){
//   navigate('/Addblog',{state:{val}})
// }





//   return (

// <Box sx={{ flexGrow: 1, padding: 4 }}>
//     <Grid container spacing={2}>
//   {blog.map((blog, index) => (
//     <Grid item xs={12} md={3} key={index}>
//       <Card sx={{ maxWidth: 600 }}>
//         <CardMedia
//           sx={{ height: 140 , width:300}}
//           image={blog.imageurl}
//           title={blog.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {blog.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {blog.description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button  sx={{ backgroundColor: 'green',color:'white' }} onClick={()=>{
//             updateData(blog)
//           }}>UPDATE</Button>
//           <Button sx={{ backgroundColor: 'red',color:'white' }}>DELETE</Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   ))}
// </Grid>

//   </Box>


// )
// }

// export default Blog





{/* <div style={{margin:'5%'}}>
    <Grid container spacing={2}>

        <Grid size={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nature
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color='warning' variant='contained'>UPDATE</Button>
      <Button size="small"  color='error' variant='contained'>DELETE</Button>
      </CardActions>
    </Card>
</Grid>

<Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nature
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color='warning' variant='contained'onClick={()=>{updateData(row)}}>UPDATE</Button>
      <Button size="small"  color='error' variant='contained'>DELETE</Button>
      </CardActions>
    </Card>
    </Grid>
    

    <Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nature
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color='warning' variant='contained'>UPDATE</Button>
      <Button size="small"  color='error' variant='contained'>DELETE</Button>
        
      </CardActions>
    </Card>
</Grid>


    <Grid>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nature
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning' variant='contained'>UPDATE</Button>
        <Button size="small"  color='error' variant='contained'>DELETE</Button>
      </CardActions>
    </Card>

        </Grid>
        
    </Grid>
</div> */}




//   )
// }

// export default Blog
