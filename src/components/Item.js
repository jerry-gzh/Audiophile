import { useParams } from "react-router-dom";

import React from 'react'

export function Item() {
  const params = useParams();
  return (
    <div>
      Detalles: {params.id}
    </div>
  )
}