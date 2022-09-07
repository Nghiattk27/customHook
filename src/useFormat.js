import React, { useState } from 'react'

function useFormat(...arr) {

    const sum = (arr) => {
        let sum = 0;
        arr.forEach(ele => {
            sum += ele;
        })
        return sum

    }

    return { a: sum(arr) };


}

export default useFormat