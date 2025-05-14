import { Button, Grid,Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from './axiosinterceptor';

const Addblog = () => {
const[form,setForm]=useState({
  title:'',
  description:'',
  imageurl:'',

})
const [titleError, setTitleError] = useState('');
const [descriptionError, setDescriptionError] = useState('');
const navigate = useNavigate();
const location = useLocation();

const validateForm = () => {
  let isValid = true;
  setTitleError('');
  setDescriptionError('');

  if (!form.title.trim()) {
    setTitleError('Blog Title is required');
    isValid = false;
  }

  if (!form.description.trim()) {
    setDescriptionError('Blog Description is required');
    isValid = false;
  }

  return isValid;
};

const capValue = () => {
  if (validateForm()) {
    if (location.state != null) {
      axiosInstance
        .put(`http://localhost:3000/blog/edit/${location.state.val._id}`, form)
        .then((res) => {
          if (res.status === 200) {
            alert('Update successful');
            navigate('/blog');
          } else {
            alert('Update failed! Please try again.');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosInstance
        .post('/blog/add', form)
        .then((res) => {
          alert('Blog added Successful!!');
          navigate('/blog');
        })
        .catch((err) => {
          console.log(err);
          alert('Failed to add blog');
          navigate('/blog');
        });
    }
  }
};

useEffect(() => {
  if (location.state != null) {
    setForm({
      ...form,
      title: location.state.val.title,
      description: location.state.val.description,
      imageurl: location.state.val.imageurl,
    });
  } else {
    setForm({
      ...form,
      title: '',
      description: '',
      imageurl: '',
    });
  }
}, [location.state]);

return (
  <Grid container justifyContent="center" style={{ marginTop: '5%' }}>
    <Grid item xs={12} sm={10} md={6} lg={5}>
      <Paper
        elevation={3}
        style={{
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: 'brown',
          width: '500px',
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          {location.state ? 'Edit Blog' : 'Add New Blog'}
        </Typography>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <TextField
              fullWidth
              label="Blog Title"
              variant="outlined"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              error={!!titleError}
              helperText={titleError}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Change this to your desired color
                },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              multiline
              label="Blog Description"
              variant="outlined"
              value={form.description}
              required
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              error={!!descriptionError}
              helperText={descriptionError}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Change this to your desired color
                },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Image URL"
              variant="outlined"
              value={form.imageurl}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Change this to your desired color
                },
              }}
              onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
            />
          </Grid>
          <Grid item>
            <Button
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'beige',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                boxShadow: '0 4px 8px black',
              }}
              onClick={capValue}
            >
              {location.state ? 'Update Blog' : 'Add Blog' }
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);
};

export default Addblog;



















































































































// const navigate=useNavigate();
// const location=useLocation();
// function capValue(){
// if(location.state!=null){
//   axios.put('http://localhost:3000/blog/edit/'+location.state.val._id,form).then((res)=>{
//     alert('Update successful');
//     navigate('/blog')
//   }).catch((err)=>{
//     console.log(err)
  
// })
// }else{
//   axios.post('http://localhost:3000/blog/add',form).then((res)=>{
//     alert('Blog Added successfully')
//     navigate('/blog')
//   }).catch((err)=>{
//     console.log(err)
  
// })
// }



// useEffect(()=>{
//     if (location.state!=null){
//       setForm({...form,title:location.state.val.title,
//         image:location.state.val.image,
//       description:location.state.val.description })}
//       else{setForm({...form,title:'',
//         image:'',
//       description:''})}
    
//   },[]);
  

// const handleSubmit = () => {
//   axios.post('http://localhost:3000/blogg/add', form)
//     .then(res => {
//       console.log(res.data);
//       alert('Blog added successfully');
//       setForm({ title: '', description: '', imageurl: '' });
//     })
//     .catch(err => {
//       console.error(err);
//       alert('Failed to add blog');
//     });
// };


// // useEffect(()=>{
// //   axios.get('http://localhost:3000/blog')
// //   .then(res=>setForm(res.data))
// //   .catch(err =>console.log(err));
// // },[]);




//   return (
//     <div style={{margin:'5%'}}>
        
//         <Grid container spacing={1}>
//   <Grid size={{ xs: 6, md: 12 }}>
//   <TextField id="outlined-basic"  fullWidth label="BlogName" variant="outlined" value={form.title}  name='title' onChange={(e)=>{
//     setForm({...form,title:e.target.value})
//   }}  />
//   </Grid><br />

//   <Grid size={{ xs: 6, md: 12 }}>
//   <TextField id="outlined-basic" fullWidth multiline rows={4} label="BlogDescription"  variant="outlined" value={form.description} name='description' onChange={(e)=>{
//     setForm({...form,description:e.target.value})
//   }} />
//   </Grid><br />

//   {/* <Grid size={{ xs: 6, md: 4 }}>
//   <TextField id="outlined-basic" fullWidth label="Outlined" variant="outlined" />
//   </Grid> */}

//   <Grid size={{ xs: 6, md: 12 }}>
//   <TextField id="outlined-basic" fullWidth label="Image URL" variant="outlined" value={form.imageurl}  name='imageurl' onChange={(e)=>{
//     setForm({...form,imageurl:e.target.value})
//   }} />
//   </Grid><br />

//   <Grid size={{ xs: 6, md: 12 }}>
//   <Button color='secondary' variant="contained" onClick={handleSubmit }>ADD Blog</Button>
//   </Grid>
// </Grid>
        
      
//     </div>
//   )
// }
// }
// export default Addblog
