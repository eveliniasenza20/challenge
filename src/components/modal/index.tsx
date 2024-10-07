import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (title: string, body: string) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreate = () => {
    onCreate(title, body);
    setTitle('');
    setBody('');
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-post-modal"
      aria-describedby="modal-to-create-new-post"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Create New Post
        </Typography>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          fullWidth
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          onClick={handleCreate}
          variant="contained"
          color="primary"
          fullWidth
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
