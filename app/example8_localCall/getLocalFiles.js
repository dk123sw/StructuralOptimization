import React, {Component} from 'react'

export default class extends Component {
    constructor(props){
            super(props);
            this.state={
                imgURL:'about:blank',
            }
        }

    onChange = (e) =>{
        console.log(e);
        let files = e.target.files;
        this.mythis = this;
        let URL = window.URL || window.webkitURL;
        // this.setState({imgURL:URL.createObjectURL(files[0])},()=>{
        //     mythis.alert(this.state.imgURL);
        // });
        try {
            // Get window.URL object
            let URL = window.URL || window.webkitURL;
            this.setState({imgURL:URL.createObjectURL(files[0])});

            // Revoke ObjectURL
            URL.revokeObjectURL(this.state.imgURL);
        }
        catch (e) {
            try {
                // Fallback if createObjectURL is not supported
                let fileReader = new FileReader();
                fileReader.onload = function (event) {
                    mythis.setState({imgURL:event.target.result});
                };
                fileReader.readAsDataURL(files[0]);
            }
            catch (e) {
                //
                let error = document.querySelector("#error");
                if (error) {
                    alert(error);
                    console.log(error);
                }
            }
        }

    };

    render() {
        const ImgUrl =this.state.imgURL;
        return(
            <div>
                <a href="javascript:" className="ui-file-box">+
                    <input type="file" name="" id='test'/>
                </a>
                <input type="file" id="take-picture" accept="image/*" capture="camera" onChange={this.onChange}/>
                <img src={ImgUrl} style={{width:300 ,height:300}}/>
            </div>
        )
    }
}