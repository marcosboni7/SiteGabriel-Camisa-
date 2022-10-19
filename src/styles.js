import styled from 'styled-components'

export const Menu = styled.menu` 
    height: 60px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 4px 4px -2px #989898;

`

export const Button = styled.button` 
background-color: yellow;
    border-radius: 15px;
    margin-top: 12px;
    width: 134px;
    height: 34px;
    margin-left: 1153px;
    border: white;
    cursor: pointer;

    strong {
        font-family: 'Montserrat';
    font-size: 14px;
    }
`
export const HeaderImage = styled.div`
    margin-left: -1216px;
  background-image: url('../../imagem/logo insta.png');
`
export const ContainerShirt = styled.div`
    width: 432px;
    height: 345px;
    margin-top: 468px;
    padding: 82px;
    margin-left: 381px;
    background-color: #eaeaea;
`

export const Shirt = styled.div`
width: 50px;

img {
    margin-top: -76px;
    margin-left: -37px;
    padding: 10px;
    width: 317px;
    padding: 10px;
    width: 327px;
}



`
export const ButtonShirt = styled.div`
background-color: yellow;
    border-radius: 15px;
    margin-top: 341px;
    width: 173px;
    height: 36px;
    margin-left: 43px;
    border: white;
    cursor: pointer;
}


    strong {
    font-family: 'Montserrat';
    font-size: 18px;
    margin-top: -2px;
    margin-left: 49px;
    padding: 6px;
    
    }
.btn-danger {
    background-color: red;
    border-radius: 15px;
    margin-top: 10px;
    width: 173px;
    height: 36px;
    margin-left: 0px;
    border: white;
    cursor: pointer;
}
.square-rotation{
    width: 75px;
    margin-top: -446px;
    height: 65px;
    margin-left: 226px;
    background-color: #3e3e3a;
    border-radius: 4px;

    
}

`
export const MenuNav = styled.div `
width: 100px;


.side-navbar {
  width: 180px;
  height: 100%;
  position: fixed;
  margin-left: -300px;
  background-color: #100901;
  transition: 0.5s;
}
.nav-link:active,
.nav-link:focus,
.nav-link:hover {
  background-color: #ffffff26;
}
.my-container {
  transition: 0.4s;
}
.active-nav {
  margin-left: 0;
}
/* for main section */
.active-cont {
  margin-left: 180px;
}
#menu-btn {
  background-color: #100901;
  color: #fff;
  margin-left: -62px;
}


`
export const Modal = styled.div`

.text-primary {
    color: #0CDA90 !important;
  }
  .btn-primary {
    color: #fff;
    background-color: #0CDA90;
    border-color: #0CDA90;
  }
  .btn-primary {
    box-shadow: 0 3px 2px rgb(12 218 144 / 20%);
  }



  .wrapper {
	margin-top: 80px;
	margin-bottom: 80px;
}

.form-signin {
	max-width: 380px;
	padding: 15px 35px 45px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-signin .form-signin-heading,
.form-signin .checkbox {
	margin-bottom: 30px;
}

.form-signin .checkbox {
	font-weight: normal;
}

.form-signin .form-control {
	position: relative;
	font-size: 16px;
	height: auto;
	padding: 10px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.form-signin .form-control:focus {
	z-index: 2;
}

.form-signin input[type="text"] {
	margin-bottom: -1px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.form-signin input[type="password"] {
	margin-bottom: 20px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}


`