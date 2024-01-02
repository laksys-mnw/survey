--page2.html

CREATE TABLE functional_area (
    id          SERIAL PRIMARY KEY,
    domain      VARCHAR(10),
    work_type   VARCHAR(50),
    industry    VARCHAR(50),
    designation VARCHAR(50),
    state       VARCHAR(50),
    district    VARCHAR(50),
    dt          TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);

--page3.html
CREATE TABLE looking_for_job (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100),
    email       VARCHAR(100),
    mobile      CHAR(10),
    state       VARCHAR(50),
    district    VARCHAR(50),
    eduction    VARCHAR(50),
    comments    VARCHAR(300),
    dt          TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);
--page5.html
CREATE TABLE job_change (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100),
    email           VARCHAR(100),
    mobile          CHAR(10),
    state           VARCHAR(50),
    district        VARCHAR(50),
    ccompany        VARCHAR(100),
    cdesignation    VARCHAR(50),
    exp_in_year     VARCHAR(10),
    comments        VARCHAR(300),
    dt              TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);

