import React, { useState } from 'react';
import '../assets/styles/details.css';

const TankDetailsPage = ({ tankId }) => {
    const tankData = {
        id: tankId,
        name: `Tanque ${tankId}`,
        temperature_max: '25°C',
        temperature_min: '20°C',
        ph_max: '7.5',
        ph_min: '6.5',
        oxygen_max: '7.0',
        oxygen_min: '5.0',
        saturation_max: '100%',
        saturation_min: '90%',
    };

    const [temperatureMax, setTemperatureMax] = useState(tankData.temperature_max);
    const [temperatureMin, setTemperatureMin] = useState(tankData.temperature_min);
    const [phMax, setphMax] = useState(tankData.ph_max);
    const [phMin, setphMin] = useState(tankData.ph_min);
    const [oxygenMax, setOxygenMax] = useState(tankData.oxygen_max);
    const [oxygenMin, setOxygenMin] = useState(tankData.oxygen_min);
    const [saturationMax, setSaturationMax] = useState(tankData.saturation_max);
    const [saturationMin, setSaturationMin] = useState(tankData.saturation_min);


    return (
        <div className='full-page-background'>
            <div className='container3'>
                <div className='div-nome'>
                    <h2 className='titulo'>{tankData.name}</h2>
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


                        <label htmlFor="phMax">Ph Máximo</label>
                        <div className='inp'><input
                            id="phMax"
                            type="text"
                            value={phMax}
                            onChange={(e) => setphMax(e.target.value)}
                            placeholder={phMax}
                        />
                        </div>


                        <label htmlFor="phMin">Ph Mínimo</label>
                        <div className='inp'><input
                            id="phMin"
                            type="text"
                            value={phMin}
                            onChange={(e) => setphMin(e.target.value)}
                            placeholder={phMin}
                        />
                        </div>

                        <label htmlFor="oxygenMax">Oxigênio Máximo</label>
                        <div className='inp'><input
                            id="oxygenMax"
                            type="text"
                            value={oxygenMax}
                            onChange={(e) => setOxygenMax(e.target.value)}
                            placeholder={oxygenMax}
                        />
                        </div>

                        <label htmlFor="oxygenMin">Oxigênio Mínimo</label>
                        <div className='inp'><input
                            id="oxygenMin"
                            type="text"
                            value={oxygenMin}
                            onChange={(e) => setOxygenMin(e.target.value)}
                            placeholder={oxygenMin}
                        />
                        </div>

                        <label htmlFor="saturationMax">Saturação Máxima</label>
                        <div className='inp'><input
                            id="saturationMax"
                            type="text"
                            value={saturationMax}
                            onChange={(e) => setSaturationMax(e.target.value)}
                            placeholder={saturationMax}
                        />
                        </div>

                        <label htmlFor="saturationMin">Saturação Mínima</label>
                        <div className='inp'><input
                            id="saturationMin"
                            type="text"
                            value={saturationMin}
                            onChange={(e) => setSaturationMin(e.target.value)}
                            placeholder={saturationMin}
                        />
                        </div>


                    </div>
                </div>
                <div className="update-button-container">
                    <button className="update-button2 inp" onClick={() => alert('Atualizando dados...')}>
                        Atualizar Dados
                    </button>
                </div>
            </div>
        </div>


    );
};

export default TankDetailsPage;
