--
-- Database: factomskaffolder_db
--

CREATE DATABASE factomskaffolder_db;

-- ENTITIES

--
-- Schema entity doctor
--

CREATE TABLE IF NOT EXISTS "doctor" (
	first_name varchar(130)  NOT NULL,
	last_name varchar(130) ,
	speciality varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity identity
--

CREATE TABLE IF NOT EXISTS "identity" (
	chain_id varchar(130)  NOT NULL,
	entry_hash varchar(130)  NOT NULL,
	key_pairs varchar(30) ,
	stage varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity patient
--

CREATE TABLE IF NOT EXISTS "patient" (
	condition varchar(130) ,
	first_name varchar(130)  NOT NULL,
	last_name varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity report
--

CREATE TABLE IF NOT EXISTS "report" (
	date date ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m identity Doctor - Identity
ALTER TABLE doctor ADD COLUMN identity INTEGER  REFERENCES "identity"(_id);

-- relation 1:m patient Doctor - Patient
ALTER TABLE doctor ADD COLUMN patient INTEGER  REFERENCES "patient"(_id);

-- relation m:m patient Report - Patient
CREATE TABLE IF NOT EXISTS "Report_patient" (
    _id SERIAL PRIMARY KEY,
    id_Report INTEGER  NOT NULL REFERENCES "report"(_id),
    id_Patient INTEGER  NOT NULL REFERENCES "patient"(_id)
);
