import * as React from "react";
import BadIdeasAlbum from "../assets/img/bad-ideas-album-cover-1.jpg";
import Button from "./Button";
import Title from "./Title";



function Hero () {
    return(
        <>
          {/* Capa de fondo con desenfoque */}
          <div className="blur-background"></div>
          <section className="background">
            <div className="d-flex justify-content-center">
                <div className="container hero py-4">
                    <div className="row">
                        <div className="col-lg-6 text-center album-cover ">
                          <img src={BadIdeasAlbum} className="img-fluid custom-img"></img>
                        </div>
            
            
                        <div className="col-lg-6 album-data">
                          <h1 className="album-title">Bad Ideas</h1>
                          <p className="artist-name">Tessa Violet</p>
                          <div>
                            <Button text="Listen Now" style={{marginRight: "10px"}} />
                            <Button text="Share" />
                          </div>
                        </div>
                    </div>
            {/* <Title text="Stream it your way" /> */}
                </div>
            </div>
          </section>
          
        </>
    );
}

export default Hero;