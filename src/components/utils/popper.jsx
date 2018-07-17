import React from 'react'

export function getTextPopper(conf, text) {
    return getPopper(conf,(
        <span>{text}</span>
    ))
}


export function getPopper({ ref, style, placement, arrowProps }, popup) {
    return (
        <div ref={ref} style={style} data-placement={placement} className="popper">
            {popup}
            <div ref={arrowProps.ref} style={arrowProps.style} className="popper__arrow"/>
        </div>
    )
}