import { useState } from 'react';
import { Button } from '../../components/button/styles';
import { Input } from '../../components/Input';
import { apiGateway } from '../../service/api';

import IconPencil from '../../assets/icon_pencil.svg';

import * as S from './styles';

export default function Home() {
    const [avatar, setAvatar] = useState('');
    const [inputRequired, setInputRequired] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        job: '',
    });
    
    const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event?.target?.files?.[0]) {
            const objectUrl = URL.createObjectURL(event?.target?.files[0]);
            setAvatar(objectUrl);
        }
    }

    const handleSaveUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!user.name || !user.email || !user.job) {
            setInputRequired(true);

            console.log(!!user.job && inputRequired);
            
            return;
        }

        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('job', user.job);
        formData.append('photo', avatar);

        try{
            apiGateway.post('/my-form', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
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
                    <Input 
                        name="name" 
                        label="Full Name" 
                        value={user.name} 
                        onChange={(event) => setUser(prevState => ({...prevState, name: event.target.value}))} 
                        error={user.name === '' && inputRequired}
                    />
                     <Input 
                        name="email" 
                        label="Email" 
                        type="email"
                        value={user.email} 
                        onChange={(event) => setUser(prevState => ({...prevState, email: event.target.value}))} 
                        error={user.email === '' && inputRequired}
                    />
                     <Input 
                        name="job" 
                        label="Job Title" 
                        value={user.job} 
                        onChange={(event) => setUser(prevState => ({...prevState, job: event.target.value}))} 
                        error={user.job === '' && inputRequired}
                    />
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