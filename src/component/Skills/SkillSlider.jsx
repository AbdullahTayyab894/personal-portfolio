import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography, Grid } from '@mui/material'
import { SkillApi } from './SkillAPi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div style={{
                background: "#f8f9fa",
                width: "100%"
            }}>
                <Typography variant='h3' sx={{
                    color: "black",
                    textAlign: "center",
                    padding: "30px 0px 30px 0px"
                }}>
                    What I Do?
                </Typography>
                <Box sx={{
                    width:"94%"
                }}>
                    <Slider {...settings}>
                        {
                            SkillApi.map((item, i) => {
                                const { id, name, img } = item;
                                return (
                                    <Box sx={{
                                        width: "300px",
                                        height: "280px",
                                        background: "white",
                                        margin: "15px",
                                        margin: "auto",
                                        background: "#f8f9fa",
                                    }}>
                                        <img src={img} alt="" width="200px" height="200px" style={{
                                            display: "block",
                                            margin: "auto",
                                            paddingTop: "40px"
                                        }} />
                                        <Typography sx={{
                                            color: "black",
                                            paddingTop: "10px",
                                            textAlign: "center",
                                        }}>
                                            {name}
                                            <Box sx={{
                                                width: "50px",
                                                margin: "auto",
                                                paddingTop: "10px",
                                                borderBottom: "3px solid #20c997",
                                            }}>
                                            </Box>
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Slider>
                </Box>
            </div>
        );
    }
}