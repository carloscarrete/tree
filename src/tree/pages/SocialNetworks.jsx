import React, { useState } from 'react'
import socialNetworksOptions from '../../data/socialNetworks';
import Select from 'react-select'

import './styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { addSocialNetwork } from '../../store/social-networks/thunks';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';

library.add(fab)


export const SocialNetworks = () => {

    const dispatch = useDispatch();
    const [socialNetwork, setSocialNetwork] = useState();

    const {handleInputChange, reset, values, url} = useForm({
        url: ''
    });
    
    const handleAddSocialNetwork = (e) => {
        e.preventDefault();
        dispatch(addSocialNetwork({
            name: socialNetwork,
            url
        }));
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
            </div>
        </section>
    )
}
