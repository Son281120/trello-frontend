import { Box } from "@mui/material";

const BoardContent = () => {
  return (
    <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          display: "flex",
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
  )
}

export default BoardContent;