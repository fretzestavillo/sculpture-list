import { Avatar, Button, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { sculptureList } from "./data";
import { useState } from "react";

export default function Home() {
  let [counter, setCounter] = useState(0);
  let [show, setShow] = useState(false);

  function handleClicked() {
    counter === 11 ? setCounter((counter = 0)) : setCounter((counter += 1));
  }

  function handleClicked1() {
    setShow(!show);
  }

  const sculptureData = sculptureList[counter];
  return (
    <>
      <Stack sx={{ backgroundColor: "#757575", height: "100vh" }}>
        <Stack
          sx={{
            padding: 10,
            backgroundColor: "#424242",
            gap: 5,
            height: "100vh",
          }}
        >
          <Button
            onClick={handleClicked}
            sx={{ width: 300, backgroundColor: "#bdbdbd" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Next
          </Button>

          <Typography>{sculptureData.name}</Typography>
          <Button
            onClick={handleClicked1}
            sx={{ width: 300, backgroundColor: "#bdbdbd" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            {!show ? "Show details" : "Hide details"}
          </Button>

          <Typography sx={{ width: 300, fontSize: 12 }}>
            {show && `${sculptureData.description}`}
          </Typography>
          <Avatar
            sx={{ width: 300, height: 250 }}
            variant="square"
            src={sculptureData.url}
          ></Avatar>
        </Stack>
      </Stack>
    </>
  );
}
