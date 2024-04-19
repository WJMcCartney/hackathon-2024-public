import DefaultAppBar from "../components/AppBar";
import { Typography, Paper, TextField } from "@mui/material";
import * as React from "react";

export default function Home() {
    const [name, setName] = React.useState();
    const [text, setText] = React.useState();
    {/*THERE HAS GOT TO BE A BETTER WAY TO DO THIS, PROBABLY A WAY TO MAP IT BUT IDK IF THAT WORKS WITH HOOKS */ }
    const [textLine2, setTextL2] = React.useState();
    const [textLine3, setTextL3] = React.useState();
    const [textLine4, setTextL4] = React.useState();
    const [textLine5, setTextL5] = React.useState();
    const [textLine6, setTextL6] = React.useState();
    const [textLine7, setTextL7] = React.useState();
    return (
        <DefaultAppBar>
            <div />
            <Paper sx={{ height: "100vh", mt: "0vh", maxHeight: "100vh", maxWidth: "500vh" }}>
                <Typography sx={{ bgcolor: "grey" }}>
                    Control Panel
                </Typography>
                <Typography sx={{ bgcolor: "grey" }}>
                    {name}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {text}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine2}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine3}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine4}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine5}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine6}
                </Typography>
                <Typography display="block" sx={{ bgcolor: "grey" }}>
                    {textLine7}
                </Typography>
                <TextField
                    id="filled-hidden-label-normal"
                    label=""
                    multiline
                    value={name}
                    variant="filled"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    onKeyDown={(ev) => {
                        console.log(`Pressed keyCode ${ev.key}`)
                        if (ev.key === 'Enter') {
                            setText(ev.target.value);
                            console.log('value', { text })
                            setTextL2(text);
                            setTextL3(textLine2);
                            setTextL4(textLine3);
                            setTextL5(textLine4);
                            setTextL6(textLine5);
                            setTextL7(textLine6);
                            ev.preventDefault();
                        }
                    }
                    }
                    sx={{ bgcolor: "grey" }}
                    fullWidth
                />
            </Paper>
        </DefaultAppBar>
    );
}