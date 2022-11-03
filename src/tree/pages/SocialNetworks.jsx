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

library.add(fab, fas)


export const SocialNetworks = () => {

    const dispatch = useDispatch();
    const { networks } = useSelector(state => state.networks);
    const {uid} = useSelector(state => state.auth);
    
    console.log(networks);
    
    
    const uploadRef = useRef();
    const [socialNetwork, setSocialNetwork] = useState();

    const { handleInputChange, reset, values, url } = useForm({
        url: ''
    });



    const handleAddSocialNetwork = (e) => {
        e.preventDefault();
        dispatch(addSocialNetwork({
            name: socialNetwork,
            url
        }));
    }

    const handleFileChange = ({ target }) => {
        if (target.files === 0) return;
        console.log(target.files);
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

                <section>
                    <input type="file"
                        onChange={handleFileChange}
                        ref={uploadRef}
                        style={{ display: 'none' }}
                    />

                    <div>
                        <span>Subir foto de perfil</span>
                        <FontAwesomeIcon className='upload-img-profile' icon="fa-solid fa-cloud-arrow-up" onClick={() => uploadRef.current.click()} />
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
