import React from "react";

let albumCover;
// tarkastetaan kansikuva albumin nimen perusteella ja palautetaan se
    export const CheckImage = (result) => {

        if (result.album === "Born to Die") {
            albumCover = "borntodie.png";
        } else if (result.album === "Born to Die: The Paradise Edition") {
            albumCover = "paradise.png";
        } else if (result.album === "Ultraviolence") {
            albumCover = "ultraviolence.png";
        } else if (result.album === "Honeymoon") {
            albumCover = "honeymoon.png";
        } else if (result.album === "Lust for Life") {
            albumCover = "lustforlife.png";
        } else if (result.album === "Norman Fucking Rockwell") {
            albumCover = "nfr.png";
        } else if (result.album === "Chemtrails over the Country Club") {
            albumCover = "chemtrails.png";
        } else if (result.album === "Blue Banisters") {
            albumCover = "bluebanisters.png";
        } else if (result.album === "Did You Know That There's a Tunnel Under Ocean Blvd") {
            albumCover = "oceanblvd.png";
        } else {
            albumCover = "placeholder.png";
        }  

        return (
            <img src={albumCover} alt="Album cover"/>    
        )
    }