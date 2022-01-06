import { 
    Card,
    Divider,
    Space,
    Spin
} from 'antd';
import { t } from 'i18next';
import React, { 
    useCallback,
    useEffect,
    useRef, 
    useState 
} from 'react';
import ImageGallery from 'react-image-gallery';
import { fetchImageUrls } from '../../apis/fetchImages';
import { PictureOutlined  } from '@ant-design/icons';
import { sliderDefaultConfig } from '../../config/sliderConfig';

import "react-image-gallery/styles/css/image-gallery.css";

const imageHeightConfig = {
    originalHeight : '300px',
    thumbnailHeight: '50px'
}

const CustomSlider = (props) => {

    const {
        duration = sliderDefaultConfig.duration,
        directionOfSlide = sliderDefaultConfig.direction
    } = props;
    
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const sliderRef = useRef()

    useEffect(() => {
        
        fetchImageUrls().then((imageUrls) => {
            setLoading(false);
            const imagesItems = imageUrls.map((url, index) => (
                {
                    original: url,
                    thumbnail: url,
                    ...imageHeightConfig,
                    
                }
            ))
            setItems(imagesItems);
        })
    }, []);

    const keyDownEventListenerCallBack = useCallback(
        (e) => {
            switch (e.keyCode) {
                case 37:
                    sliderRef.current.slideLeft();
                    break;
                case 39:
                    sliderRef.current.slideRight();
                    break;
                default:
                    break
            }
        },
        [],
    )

    useEffect(() => {
            window.addEventListener('keydown', keyDownEventListenerCallBack);
        return () => {
            window.removeEventListener('keydown', keyDownEventListenerCallBack)
        }
    }, [keyDownEventListenerCallBack])

    return (
        <Spin
            spinning={loading} 
            size='large'
            tip={ t('common.loading') }
        >
            <Card 
                style={{ height: '60vh'}} 
                loading={loading}
            >
                <Divider orientation='left'>
                    <Space>
                        <PictureOutlined />
                        { t('common.title.slider') }
                    </Space>
                </Divider>
                <ImageGallery 
                    ref={sliderRef}
                    items={items} 
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={true}
                    showBullets
                    showIndex
                    showThumbnails={true}
                    slideInterval={duration}
                    isRTL={directionOfSlide}
                />
            </Card>
            {/* <br />        
            <CurrentSetting 
                duration={ duration }
                direction={directionOfSlide}
            /> */}
        </Spin>
    )
}

export default CustomSlider;