import React, { useRef, useState } from 'react'
import socialNetworksOptions from '../../data/socialNetworks';
import Select from 'react-select'

import './styles/style.css'
import './styles/table.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

import { addSocialNetwork } from '../../store/social-networks/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { startUploadingFiles } from '../../store/auth/thunks';

library.add(fab, fas)


export const SocialNetworks = () => {

    const dispatch = useDispatch();
    const { networks } = useSelector(state => state.networks);

    const [backgroundProfile, setBackgroundProfile] = useState();
    const [profilePicture, setProfilePicture] = useState();
    
    
    const uploadRef = useRef();
    const uploadRefBackground = useRef();
    const [socialNetwork, setSocialNetwork] = useState();

    const { handleInputChange, reset, values, url, biography } = useForm({
        url: '',
        biography: ''
    });



    const handleAddSocialNetwork = (e) => {
        e.preventDefault();
        dispatch(addSocialNetwork({
            name: socialNetwork,
            url
        }));
    }

    const handleSubmitInformation = (e) => {
        e.preventDefault();
        dispatch(startUploadingFiles(biography, backgroundProfile, profilePicture));
    };

    const handleFileChangeProfile = ({ target }) => {
        if (target.files === 0) return;
        setProfilePicture(target.files[0]);
        //dispatch(startUploadingFiles(target.files[0]));
    }

    const handleFileChangeBackground = ({ target }) => {
        if (target.files === 0) return;
        setBackgroundProfile(target.files[0]);
        //dispatch(startUploadingFiles(target.files[0]));
    }

    return (
        <section className='wrapper'>
            <div className="content">
                <header>
                    <h1>Agregar nueva red social</h1>
                </header>
                <section>
                    <form className='login-form' onSubmit={handleAddSocialNetwork}>
                        <div className="input-group">
                            <label htmlFor="url">URL:</label>
                            <input name="url" onChange={handleInputChange} value={url} type="text" id="url" placeholder='Url de la red social' autoComplete='off' />
                            <Select placeholder="Seleccione su red" className='select-social' options={socialNetworksOptions} onChange={(e) => setSocialNetwork(e.value)} />
                        </div>
                        <div className="input-group">
                            <button type='submit' className='button'>Agregar</button>
                        </div>
                    </form>
                </section>

                <form className='login-form' onSubmit={handleSubmitInformation}>
                        <div className="input-group">
                            <label htmlFor="url">Biography:</label>
                            <textarea rows={5} name="biography" onChange={handleInputChange} value={biography} id="biography" placeholder='El otro día...' autoComplete='off' />
                        </div>
                        <div className="input-group">
                            <button type='submit' className='button'>Actualizar</button>
                        </div>
                    </form>
                <section>
                    <input type="file"
                        onChange={handleFileChangeProfile}
                        ref={uploadRef}
                        style={{ display: 'none' }}
                    />

                    <div>
                        <span>Subir foto de perfil</span>
                        <FontAwesomeIcon className='upload-img-profile' icon="fa-solid fa-cloud-arrow-up" onClick={() => uploadRef.current.click()} />
                    </div>

                    <input type="file"
                        onChange={handleFileChangeBackground}
                        ref={uploadRefBackground}
                        style={{ display: 'none' }}
                    />

                    <div>
                        <span>Subir background</span>
                        <FontAwesomeIcon className='upload-img-profile' icon="fa-solid fa-cloud-arrow-up" onClick={() => uploadRefBackground.current.click()} />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>Johnson</td>
                                <td>67</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    )
}
