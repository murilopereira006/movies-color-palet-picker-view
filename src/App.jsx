import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import ColorsRetanguloDisplayer from "./components/ColorPaletPicker"
import ModelCaller from "./components/ModelCaller"
import NeilArmstrong from "./assets/3dModel/neilArmstrong/index.html"
import OldVintageFilmCamera from "./assets/3dModel/oldVintageFilmCamera/index.html"

const backendUrl = import.meta.env.BACKEND_URL

const segmentingArray = (bigArray, itemsLimit) => {
    let arraySegmentes = []
    let temp = []
    for (let index = 0; index < bigArray.length; index++) {
        temp.push(bigArray[index])
        if (temp.length === itemsLimit) {
            arraySegmentes.push(temp)
            temp = []
        }
    }
    return arraySegmentes.push(temp)
}


function App() {
    const [currVideo, setCurrVideo] = useState(null)
    const [paletColorsArray, setPaletColorsArray] = useState(null)

    useEffect(() => {
        if (currVideo) {
            async () => {
                try {
                    const formData = new FormData();
                    formData.append('video', currVideo);

                    const response = await axios.post(backendUrl, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    console.log('Video enviado com sucesso!', response.data);
                } catch (error) {
                    alert('Falha ao enviar o video');
                    console.error('Erro ao enviar o vídeo:', error);
                }
            }

            fetchData();
        }
    }, [currVideo])

    const fetchData = async () => {
        try {
            const response = await axios.get(backendUrl);
            setPaletColorsArray(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const handleVideoLink = (e) => {
        e.preventDefault();
        const videoLink = e.target.value;
        if (isValidYoutubeLink(videoLink)) {
            setCurrVideo(videoLink);
        } else {
            alert('Por favor, insira um link válido do YouTube.');
        }
    };

    const isValidYoutubeLink = (link) => {
        // Regex para validar links do YouTube
        const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
        return youtubeRegex.test(link);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleVideo(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleVideo(file);
    };

    const handleVideo = (file) => {
        if (file.type.startsWith('video/')) {
            setCurrVideo(URL.createObjectURL(file));
        } else {
            alert('Por favor, selecione um arquivo de vídeo.');
        }
    };

    return (
        <main className="card">
            <h1>Identificador de paleta de cores de producoes audiovisuais</h1>
            <h3>Adicionei aqui seu video a ser dissecado:</h3>

            <div className="drop-area" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                <span className="drop-message"><strong><label htmlFor="file-input">Clique</label></strong> ou arraste e solte um arquivo de vídeo aqui</span>
                <input type="file" id="file-input" accept="video/*" onChange={handleFileInputChange} />
            </div>

            <div>
                <input type="text" placeholder="Ou copie e cole aqui a URL do Youtube" onChange={handleVideoLink} />
            </div>

            <ModelCaller model={OldVintageFilmCamera} />
            <ModelCaller model={NeilArmstrong} />

            {
                paletColorsArray && segmentingArray(paletColorsArray, 100).map((array, index) => <ColorsRetanguloDisplayer key={index} arrayOfColors={array} />)
            }
        </main>
    )
}

export default App;
