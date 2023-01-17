// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {codebox} from '../models';

export function CreateEd25519KeyPair(arg1:string):Promise<codebox.KeyPair>;

export function CreateSHA1MD5Hash(arg1:string):Promise<codebox.SHA1MD5Result>;

export function CreateSHA2Hash(arg1:string):Promise<codebox.SHA2Result>;

export function CreateSHA3Hash(arg1:string):Promise<codebox.SHA3Result>;

export function Ed25519Sign(arg1:string,arg2:string,arg3:string,arg4:string):Promise<codebox.SignResult>;

export function Ed25519Verify(arg1:string,arg2:string,arg3:string):Promise<codebox.SignVerifyResult>;

export function Greet(arg1:string):Promise<string>;
