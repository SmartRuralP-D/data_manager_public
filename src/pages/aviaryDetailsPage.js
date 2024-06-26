import React, { useState } from 'react';
import '../assets/styles/details.css';


const AviaryDetailsPage = ({ aviaryId }) => {
    const aviaryData = {
        id: aviaryId,
        linhagem: 'premium',
        name: `Aviário ${aviaryId}`,
        temperature_max: '25°C',
        temperature_min: '20°C',
        humidity_max: '70%',
        humidity_min: '50%',
    };

    const [temperatureMax, setTemperatureMax] = useState(aviaryData.temperature_max);
    const [temperatureMin, setTemperatureMin] = useState(aviaryData.temperature_min);
    const [humidityMax, setHumidityMax] = useState(aviaryData.humidity_max);
    const [humidityMin, setHumidityMin] = useState(aviaryData.humidity_min);

    return (
        <div className='full-page-background'>
            <div className='container3'>
                <div className='div-nome'>
                    <h2 className='titulo'>{aviaryData.name}</h2>
                    <div className='div-dados3'>

                        <label htmlFor="temperatureMax">Temperatura Máxima</label>
                        <div className='inp'><input
                            id="temperatureMax"
                            type="text"
                            value={temperatureMax}
                            onChange={(e) => setTemperatureMax(e.target.value)}
                            placeholder={temperatureMax}
                        />
                        </div>


                        <label htmlFor="temperatureMin">Temperatura Mínima</label>
                        <div className='inp'><input
                            id="temperatureMin"
                            type="text"
                            value={temperatureMin}
                            onChange={(e) => setTemperatureMin(e.target.value)}
                            placeholder={temperatureMin}
                        />
                        </div>


                        <label htmlFor="humidityMax">Umidade Máxima</label>
                        <div className='inp'><input
                            id="humidityMax"
                            type="text"
                            value={humidityMax}
                            onChange={(e) => setHumidityMax(e.target.value)}
                            placeholder={humidityMax}
                        />
                        </div>


                        <label htmlFor="humidityMin">Umidade Mínima</label>
                        <div className='inp'><input
                            id="humidityMin"
                            type="text"
                            value={humidityMin}
                            onChange={(e) => setHumidityMin(e.target.value)}
                            placeholder={humidityMin}
                        />
                        </div>

                    </div>
                </div>
                <div className="update-button-container">
                    <button className="update-button inp" onClick={() => alert('Atualizando dados...')}>
                        Atualizar Dados
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AviaryDetailsPage;
