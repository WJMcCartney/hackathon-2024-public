import { AppBar, Toolbar, Box, useTheme, Button, Paper } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";


function Footer() {
    return (
        <>
            <div style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}>
                <hr style={{ borderColor: "#333" }} />
                <div style={{ color: "#999" }}>
                    <p style={{ float: "right" }}>
                        <span>
                            <a
                                style={{ textDecoration: "none", color: "black" }}
                                href="/privacy"
                            >
                                Privacy
                            </a>
                        </span>
                        <span style={{ marginLeft: 30 }}>
                            <a
                                style={{ textDecoration: "none", color: "black" }}
                                href="/terms"
                            >
                                Terms
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}



export default function DefaultAppBar({ children, hideFooter }) {
    let theme = useTheme();
    return (
        <Box
            sx={{
                paddingTop: hideFooter ? 0 : "64px",
                [theme.breakpoints.down("md")]: {
                    paddingTop: hideFooter ? 0 : "48px",
                },
            }}>
            <AppBar color="secondary">
                <Toolbar>

                    <Button href="./" sx={{ fontSize: 32, display: "flex", pr: 0, mr: 0 }}>
                        Trapolla
                    </Button>
                    <Paper sx={{ mr: "150vh" }} />
                    <Box container justifyContent="flex-end" width="10vh" sx={{ display: "flex", alignItems: "right", flex: "auto" }}>
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        paddingTop: hideFooter ? "64px" : 0,
                        [theme.breakpoints.down("md")]: {
                            paddingTop: hideFooter ? "48px" : 0,
                        },
                        textAlign: "center",
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </Box>
                {hideFooter ? null : <Footer />}
            </main>
        </Box >
    )
}