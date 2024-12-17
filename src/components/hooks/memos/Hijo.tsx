import React, { memo } from 'react'

interface HijoProps {
    numero: number;
    incrementar: ( numero: number ) => void;
}

export const Hijo = memo(({ numero, incrementar } : HijoProps) => {

    return (
        <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition-transform"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
