import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';
import {
  Card,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { SnackbarUtilities } from '../components/alert';
import CreatePostModal from '../components/modal';

interface Data {
  id: string;
  title: string;
  body: string;
}

const Home = () => {
  const role = useSelector((state: any) => state.auth.user.role);
  const userId = useSelector((state: any) => state.auth.user.id);

  const [data, setData] = useState<Data[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  const ADMIN = role === 'admin';

  function toCapitalizedWords(str: string) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      SnackbarUtilities.success('Success, post deleted');
    } catch (error) {
      SnackbarUtilities.error('Error trying to delete post');
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreatePost = async (title: string, body: string) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title,
          body,
          userId: userId,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      const newPost = response.data;
      setData((prevData) => [
        { ...newPost, id: (prevData.length + 1).toString() },
        ...prevData,
      ]);

      SnackbarUtilities.success('Success, post created');
    } catch (error) {
      SnackbarUtilities.error('Error trying to create post');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Grid container mt={3} p={2}>
        <CreatePostModal
          open={openModal}
          onClose={handleCloseModal}
          onCreate={handleCreatePost}
        />
        <Grid item xs={12}>
          <TextField
            label=""
            placeholder="Search post"
            variant="outlined"
            fullWidth
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            sx={{ marginBottom: '2rem' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {ADMIN && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>POSTS</h2>
              <Button
                onClick={handleOpenModal}
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#005d9e',
                  height: '48px',
                  color: '#fff',
                }}
              >
                CREATE POST
              </Button>
            </Box>
          )}
        </Grid>
        {filteredData.length > 0
          ? filteredData.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  sx={{
                    margin: '1rem',
                    padding: '10px',
                    height: '200px',
                    position: 'relative',
                  }}
                >
                  {ADMIN && (
                    <IconButton
                      onClick={() => handleDelete(item.id)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        color: 'red',
                        padding: '8px',
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                  <h4 className="truncated">
                    {toCapitalizedWords(item.title)}
                  </h4>
                  <p>{item.body}</p>
                </Card>
              </Grid>
            ))
          : data.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  sx={{
                    margin: '1rem',
                    padding: '10px',
                    height: '200px',
                    position: 'relative',
                  }}
                >
                  {ADMIN && (
                    <IconButton
                      onClick={() => handleDelete(item.id)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        color: 'red',
                        padding: '8px',
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                  <h4 className="truncated">
                    {toCapitalizedWords(item.title)}
                  </h4>
                  <p>{item.body}</p>
                </Card>
              </Grid>
            ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
