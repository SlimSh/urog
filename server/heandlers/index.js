import errors from './errors';
import logger from './logger';
import bodyParser from './bodyParser';
import favicon from './favicon';
import session from './session';
import statics from './static';
import dataTypes from './dataTypes';
import db from './db';
import jwt from './jwt';

export default [errors, logger, bodyParser, favicon, session, statics, dataTypes, db, jwt];