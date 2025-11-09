import { Chip } from "@mui/material";

export default function Tag({ tag }) {
  return (
    <Chip 
      label={tag} 
      size="small" 
      sx={{ 
        bgcolor: "#476f9dff", 
        color: "#fff", 
        fontWeight: 500 
      }} 
    />
  );
}
