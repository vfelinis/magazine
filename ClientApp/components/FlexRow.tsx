import * as React from 'react';

export default class FlexRow extends React.Component<any, void> {
    public render() {
        return <div className='flex-row'>
            {
                this.props.images.map((image, key) => {
                    return <div key={key} className='flex-row-item bg'
                            style={{
                                backgroundImage: `url(${image})`,
                                flexGrow: Math.floor(Math.random() * (10 - 1)) + 1
                            }}>
                        {image}
                    </div>
                })
            }
        </div>
    }
}