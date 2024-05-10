import React, { useState } from 'react'
import brg from '../assets/images/bgr.jpg'
import logo from '../assets/images/logo.png'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const Login = ({ onLogin }) => {

    const ARRAY_LIST = [
        {
            firstname: "Phong",
            lastname: "Nguyen",
            username: "GV000",
            password: "123123",
            isRole: 0
        },
        {
            firstname: "Quyen",
            lastname: "Nguyen",
            username: "GV123",
            password: "123123",
            isRole: 1
        }
    ];



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = ARRAY_LIST.find(item => item.username === username && item.password === password);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            onLogin(user);
            // navigate("/") ? console.log("oke") : console.log("chưa")
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
        }
    };



    return (
        <div className='container_login'>
            <img src={brg} alt="anh" className='img_bgr' />
            <div className='ctn_line_flex_box'>
                <div className='text_hello'>
                    <div className='img_logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='box_tex_bt'>

                        <div>WECOME !</div>
                        <div>HỆ THỐNG QUẢN LÝ GIẢNG VIÊN</div>
                        <div>You only live once, but if you do it right, once is enough</div>

                    </div></div>
                <div className="box_login">
                    <div className='text_heading'>ĐĂNG NHẬP</div>
                    <div className='box_form_login'>
                        <form onSubmit={handleLogin}>
                            <div className='group_form'>
                                <input type="text" placeholder='MA GIANG VIEN'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}

                                />
                                <FaUser />
                            </div>
                            <div className='group_form'>
                                <input type="password" placeholder='MAT KHAU'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FaLock />
                            </div>
                            <div className='group_form set_line'>
                                <Link to="#" className='fg_pass'>Quên mật khẩu!</Link>
                            </div>
                            <div className='group_form'>
                                <button className='btn_login' type="submit">ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login