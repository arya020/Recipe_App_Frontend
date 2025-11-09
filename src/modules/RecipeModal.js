import { Modal, Box, Typography, Stack } from "@mui/material";

export default function RecipeModal({ open, handleClose, recipe }) {
  if (!recipe) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          bgcolor: "#fff",
          borderRadius: 3,
          p: 3,
          boxShadow: 6,
        }}
      >
        <Typography variant="h5" gutterBottom>{recipe.name}</Typography>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Cuisine: {recipe.cuisine}
        </Typography>
        <Stack spacing={1} mt={2}>
          {recipe.instructions?.map((step, i) => (
            <Typography key={i} variant="body2">• {step}</Typography>
          ))}
        </Stack>
      </Box>
    </Modal>
  );
}
