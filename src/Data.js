import React, { Component } from "react";
import Display from "./Display";
const data_array = '["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img5.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img5.jpg","img6.jpg","img7.jpg"]';

var my_data =JSON.parse(data_array);
export default class Data extends Component {
  render() {
    return my_data.map((image) => <Display images={image} />);
  }
}
