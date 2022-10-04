import React, {useState} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        onChangeRange
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    //const [range, setRange] = useState<number[]>(value ? value : [0,100])

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                //getAriaValueText={valuetext}
            />
        </Box>
    )
}

export default SuperDoubleRange
