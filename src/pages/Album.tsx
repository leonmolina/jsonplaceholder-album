import { useEffect, useState } from "react";
import { Photo } from '../types/Photo';
import { AlbumType } from "../types/AlbumType";
import { api } from '../api';
import '../App.css';
import { useNavigate, useParams } from "react-router-dom";


export const Album = () => {
    const [album, setAlbum] = useState<AlbumType>();
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const params = useParams();
    const id: any = params.slug;

    useEffect(() => {
        loadAlbum();
        loadPhotos();
    }, []);
    
    const loadAlbum = async () => {
        let json = await api.getAlbum(id);
        setAlbum(json);
    }
    const loadPhotos = async () => {
        setLoading(true);
        let json = await api.getPhotos(id);
        setLoading(false);
        setPhotos(json);
    }
    const handleBackButton = () => {
        navigate('/');
    }

    return (
        <div>
            {loading && 
                <div>Carregando...</div>
            }
            
            {!loading && photos.length > 0 &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <h1>{album?.title}</h1>
                    <div className="photo-album">
                        {photos.map((item, index) => (
                            <div className="photos" key={index}>
                                <img src={item.thumbnailUrl} />
                            </div>
                        ))}
                    </div>
                </>
            }

            {!loading && photos.length === 0 && 
                <div>Tente novamente mais tarde!</div>
            }
        </div>
    );
}