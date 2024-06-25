import {EntitySchema} from 'typeorm'
import serviceTypes from './contactUsReverseType.mjs'

export default new EntitySchema({
    name: 'contactUs',
    tableName: 'contact_us',
    columns: { 
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        name: {
            type: 'varchar',
            nullable: false,
            length:255
        },
        email: {
            type: 'varchar',
            nullable: false,
            length:255
        },
        phone: {
            type: 'varchar',
            nullable: true,
            length:50
        },
        message: {
            type: 'text',
            nullable: false,
        },
        company:{
            type:'varchar',
            nullable:true,
            length:255
        },
        serviceTypes:{
            type:'enum',
            enum:serviceTypes,
            nullable:false,
            enumName: "contact_services_enum",
        },
        createdAt: {
            type: 'timestamp',
            createDate: true,
            default: 'CURRENT_TIMESTAMP'
        },
        updatedAt: {
            type: 'timestamp',
            updateDate: true,
            default: 'CURRENT_TIMESTAMP'
        }
    }
})