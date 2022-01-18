import React, { useState } from 'react';
import { Button } from '../../components/button/styles';
import { Input } from '../../components/Input';
import { apiGateway } from '../../service/api';

import IconPencil from '../../assets/icon_pencil.svg';

import * as S from './styles';

export default function Home() {
    const [avatar, setAvatar] = useState('');
    
    const handleAvatar = (event) => {
        const objectUrl = URL.createObjectURL(event?.target?.files[0]);
        setAvatar(objectUrl);
    }

    const handleSaveUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            apiGateway.post('/my-form', {
                name: '',
                email: '',
                job: '',
            })
        } catch (error) {
            alert('Error! Try again.');
        }
    }

    return(
        <S.Container>
            <div className="header">
                <h1>Add Team Member</h1>
            </div>

            <form onSubmit={handleSaveUser}>
                <div className="avatar">
                    {avatar && <img src={avatar} className="avatar-image" alt="avatar" />}
                    <div className="avatar-edit">
                        <label htmlFor="file">
                            <div className="icon-edit">
                                <img  src={IconPencil} alt="edit icon" />
                            </div>
                        </label>
                        <input className="input-file" type="file" id="file" accept="image/*" onChange={handleAvatar}/>
                    </div>
                </div>

                <div className="inputs-area">
                    <Input name="name" label="Full Name"/>
                    <Input name="email" label="Email"/>
                    <Input name="job" label="Job Title"/>
                </div>

                <div className="footer">
                    <div className="button">
                        <Button type="submit">Add Team Member</Button>
                    </div>
                </div>
            </form>
        </S.Container>
    );
}