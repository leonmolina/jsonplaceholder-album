import { useEffect, useState } from "react";
import { AlbumType } from '../types/AlbumType';
import { api } from '../api';
import '../App.css';
import { Link } from "react-router-dom";

export const Home = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        let json = await api.getAllAlbums();
        setLoading(false);
        setAlbums(json);
    }

    return (
        <div>
            {loading && 
                <div>Carregando...</div>
            }

            {!loading && albums.length > 0 &&
                <>
                    <div>
                        {albums.map((item, index) => (
                            <Link to={`/album/${index+1}`} key={index} className="link">
                                <div className="album">
                                    {item.title}
                                </div>
                            </Link>

                        ))}
                    </div>
                </>
            }

            {!loading && albums.length === 0 && 
                <div>Tente novamente mais tarde!</div>
            }


        </div>
    );
}