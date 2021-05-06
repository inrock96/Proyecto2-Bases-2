const express = require('express')
const router = express.Router()
const fs = require('fs')
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['192.168.1.20']});


router.post('/operacion/simple',(req,res)=>{
    let body = req.body
    let cuenta = body.cuenta
    let query = `SELECT * FROM operacion_por_cuentahabiente WHERE cui1 = ?;`
    client.execute(query,[cuenta]).then(result=>{
        res.send(result.rows)
    })
})


router.post('/debito',(req,res)=>{
    let body = req.body
    let inst = body.institucion
    client.execute('SELECT * FROM proyecto2.debito_por_institucion WHERE institucion1 = ?',[inst]).then(result=>{
        res.send(result.rows)
    })
})
router.post('/credito',(req,res)=>{
    let body = req.body
    let inst = body.institucion
    client.execute('SELECT * FROM proyecto2.credito_por_institucion WHERE institucion1 = ?',[inst]).then(result=>{
        res.send(result.rows)
    })
})

router.get('/instituciones',(req,res)=>{
    client.execute('SELECT * FROM proyecto2.institucion').then(result=>{
        res.send(result.rows)
    })
})

router.get('/cuentahabientes',(req,res)=>{
    client.execute('SELECT * FROM  proyecto2.cuentahabiente_por_institucion').then(result=>{
        res.send(result.rows)
    })
})

router.post('/operacion/mensual',(req,res)=>{
    let body = req.body
    let cuenta = body.cuenta
    let mes = mes
    let query = `SELECT * FROM operacion_por_cuentahabiente WHERE cui1 = ${cuenta} AND fecha >= '2020-0${mes}-01' AND fecha <='2020-0${mes}-30';`
    client.execute(query).then(result=>{
        res.send(result.rows)
    })
})

router.put('/operacion/simple',(req,res)=>{
    let body = req.body
    let cui1 = body.cui_origen
    let banco1 = body.inst_origen
    let tipo1 = body.tipo_origen
    let monto = body.monto
    let cui2 = body.cui_dest
    let banco2 = body.inst_dest
    let tipo2 = body.tipo_dest
     
})

module.exports = router