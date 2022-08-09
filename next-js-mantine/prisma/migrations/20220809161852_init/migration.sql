-- CreateTable
CREATE TABLE "asignado" (
    "id_psalud" INTEGER NOT NULL,
    "cod_centro" INTEGER NOT NULL,
    "fecha_asignado" DATE NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "asignado_pkey" PRIMARY KEY ("id_psalud","cod_centro")
);

-- CreateTable
CREATE TABLE "centro_salud" (
    "cod_centro" INTEGER NOT NULL,
    "nomb_centro" VARCHAR(255) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "centro_hosp" BOOLEAN NOT NULL DEFAULT false,
    "centro_vac" BOOLEAN NOT NULL DEFAULT false,
    "id_encargado" INTEGER,
    "cod_municipio" INTEGER NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_centro_pkey" PRIMARY KEY ("cod_centro")
);

-- CreateTable
CREATE TABLE "consiste" (
    "cod_medicamento" INTEGER NOT NULL,
    "cod_trat" INTEGER NOT NULL,
    "cant_dias" INTEGER NOT NULL,
    "dosis" INTEGER NOT NULL,
    "frecuencia" VARCHAR(255) NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "consiste_pkey" PRIMARY KEY ("cod_medicamento","cod_trat")
);

-- CreateTable
CREATE TABLE "contagio" (
    "doc_identidad" INTEGER NOT NULL,
    "denom_oms" VARCHAR(255) NOT NULL,
    "fecha_contagio" DATE NOT NULL,
    "tiempo_reposo" INTEGER NOT NULL,
    "casa_hospitalizado" BOOLEAN NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "contagio_pkey" PRIMARY KEY ("doc_identidad","denom_oms")
);

-- CreateTable
CREATE TABLE "eficaz" (
    "id_vacuna" INTEGER NOT NULL,
    "denom_oms" VARCHAR(255) NOT NULL,
    "porc_eficacia" REAL NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "eficaz_pkey" PRIMARY KEY ("id_vacuna","denom_oms")
);

-- CreateTable
CREATE TABLE "estado_provincia" (
    "cod_estado" INTEGER NOT NULL,
    "nom_estado" VARCHAR(255) NOT NULL,
    "cod_pais" INTEGER,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_estado_pkey" PRIMARY KEY ("cod_estado")
);

-- CreateTable
CREATE TABLE "hospitalizado" (
    "doc_identidad" INTEGER NOT NULL,
    "cod_centro" INTEGER NOT NULL,
    "fecha_hospitalizado" DATE NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "hospitalizado_pkey" PRIMARY KEY ("doc_identidad","cod_centro","fecha_hospitalizado")
);

-- CreateTable
CREATE TABLE "medicamento" (
    "cod_medicamento" INTEGER NOT NULL,
    "nombre_medicamento" VARCHAR(255) NOT NULL,
    "compuesto" VARCHAR(255) NOT NULL,
    "concentracion" REAL NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_medicamento_pkey" PRIMARY KEY ("cod_medicamento")
);

-- CreateTable
CREATE TABLE "municipio" (
    "cod_municipio" INTEGER NOT NULL,
    "nombre_municipio" VARCHAR(255) NOT NULL,
    "cod_estado" INTEGER,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_municipio_pkey" PRIMARY KEY ("cod_municipio")
);

-- CreateTable
CREATE TABLE "pais" (
    "cod_pais" INTEGER NOT NULL,
    "nombre_pais" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "pais_pkey" PRIMARY KEY ("cod_pais")
);

-- CreateTable
CREATE TABLE "persona" (
    "doc_identidad" INTEGER NOT NULL,
    "nombre_per" VARCHAR(255) NOT NULL,
    "apellido_per" VARCHAR(255) NOT NULL,
    "fecha_nac" DATE NOT NULL,
    "sexo" VARCHAR(255) NOT NULL,
    "ocupacion_per" VARCHAR(255),
    "alto_riesgo" BOOLEAN NOT NULL,
    "n_telefono_per" INTEGER,
    "direccion" VARCHAR(255),
    "es_paciente" BOOLEAN,
    "es_pers_salud" BOOLEAN,
    "nacionalidad" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "doc_identidad_pkey" PRIMARY KEY ("doc_identidad")
);

-- CreateTable
CREATE TABLE "personal_salud" (
    "doc_identidad" INTEGER NOT NULL,
    "es_medico" BOOLEAN NOT NULL DEFAULT false,
    "es_enfermeria" BOOLEAN NOT NULL DEFAULT false,
    "es_asistente_medico" BOOLEAN NOT NULL DEFAULT false,
    "correo" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "doc_identidad_psalud_pkey" PRIMARY KEY ("doc_identidad")
);

-- CreateTable
CREATE TABLE "presenta" (
    "id_vacuna" INTEGER NOT NULL,
    "cod_sintoma" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "presenta_pkey" PRIMARY KEY ("id_vacuna","cod_sintoma")
);

-- CreateTable
CREATE TABLE "requiere" (
    "id_paciente" INTEGER NOT NULL,
    "cod_trat" INTEGER NOT NULL,
    "fecha" DATE NOT NULL,
    "estado_tratamiento" VARCHAR(255),
    "casa_hospitalizado" BOOLEAN NOT NULL,
    "aislamiento" BOOLEAN NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "requiere_pkey" PRIMARY KEY ("id_paciente","cod_trat","fecha")
);

-- CreateTable
CREATE TABLE "reside" (
    "doc_identidad" INTEGER NOT NULL,
    "cod_municipio" INTEGER NOT NULL,
    "fecha_reside" DATE NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "reside_pkey" PRIMARY KEY ("doc_identidad","cod_municipio")
);

-- CreateTable
CREATE TABLE "sintoma_efecto" (
    "cod_sintoma" INTEGER NOT NULL,
    "descrip_sintoma" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_sintoma_pkey" PRIMARY KEY ("cod_sintoma")
);

-- CreateTable
CREATE TABLE "tiene" (
    "denom_oms" VARCHAR(255) NOT NULL,
    "cod_sintoma" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "tiene_pkey" PRIMARY KEY ("cod_sintoma","denom_oms")
);

-- CreateTable
CREATE TABLE "tratamiento" (
    "cod_trat" INTEGER NOT NULL,
    "nomb_tratamiento" VARCHAR(255) NOT NULL,
    "descrip_tratamiento" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "cod_trat_pkey" PRIMARY KEY ("cod_trat")
);

-- CreateTable
CREATE TABLE "vacuna" (
    "id_vacuna" INTEGER NOT NULL,
    "nomb_vacuna" VARCHAR(255) NOT NULL,
    "lote" INTEGER NOT NULL,
    "cant_dosis" INTEGER NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "laboratorio" VARCHAR(255) NOT NULL,
    "cod_pais" INTEGER NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "id_vacuna_pkey" PRIMARY KEY ("id_vacuna")
);

-- CreateTable
CREATE TABLE "vacunada" (
    "doc_identidad" INTEGER NOT NULL,
    "id_vacuna" INTEGER NOT NULL,
    "cod_centro" INTEGER NOT NULL,
    "id_psalud" INTEGER NOT NULL,
    "fecha_vacuna" DATE NOT NULL,
    "dosis" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "vacunada_pkey" PRIMARY KEY ("doc_identidad","id_vacuna","cod_centro","id_psalud","fecha_vacuna")
);

-- CreateTable
CREATE TABLE "virus_variante" (
    "virus" VARCHAR(255) NOT NULL,
    "denom_oms" VARCHAR(255) NOT NULL,
    "linaje" VARCHAR(255) NOT NULL,
    "origen_annio" DATE NOT NULL,
    "origen_mes" DATE NOT NULL,
    "cod_pais" INTEGER NOT NULL,
    "clasificacion" VARCHAR(255) NOT NULL,
    "activo" SERIAL NOT NULL,

    CONSTRAINT "denom_oms_pkey" PRIMARY KEY ("denom_oms")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "personal_salud"("correo");

-- AddForeignKey
ALTER TABLE "asignado" ADD CONSTRAINT "cod_centro_foreign" FOREIGN KEY ("cod_centro") REFERENCES "centro_salud"("cod_centro") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asignado" ADD CONSTRAINT "id_psalud_foreign" FOREIGN KEY ("id_psalud") REFERENCES "personal_salud"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "centro_salud" ADD CONSTRAINT "cod_municipio_foreign" FOREIGN KEY ("cod_municipio") REFERENCES "municipio"("cod_municipio") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "centro_salud" ADD CONSTRAINT "id_encargado_foreign" FOREIGN KEY ("id_encargado") REFERENCES "personal_salud"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consiste" ADD CONSTRAINT "cod_medicamento_foreign" FOREIGN KEY ("cod_medicamento") REFERENCES "medicamento"("cod_medicamento") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consiste" ADD CONSTRAINT "cod_trat_foreign" FOREIGN KEY ("cod_trat") REFERENCES "tratamiento"("cod_trat") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contagio" ADD CONSTRAINT "denom_oms_foreign" FOREIGN KEY ("denom_oms") REFERENCES "virus_variante"("denom_oms") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contagio" ADD CONSTRAINT "doc_identidad_foreign" FOREIGN KEY ("doc_identidad") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eficaz" ADD CONSTRAINT "denom_oms_foreign" FOREIGN KEY ("denom_oms") REFERENCES "virus_variante"("denom_oms") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eficaz" ADD CONSTRAINT "id_vacuna_foreign" FOREIGN KEY ("id_vacuna") REFERENCES "vacuna"("id_vacuna") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estado_provincia" ADD CONSTRAINT "cod_pais_foreign" FOREIGN KEY ("cod_pais") REFERENCES "pais"("cod_pais") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospitalizado" ADD CONSTRAINT "cod_centro_foreign" FOREIGN KEY ("cod_centro") REFERENCES "centro_salud"("cod_centro") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospitalizado" ADD CONSTRAINT "doc_identidad_foreign" FOREIGN KEY ("doc_identidad") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipio" ADD CONSTRAINT "cod_estado_prov_foreign" FOREIGN KEY ("cod_estado") REFERENCES "estado_provincia"("cod_estado") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_salud" ADD CONSTRAINT "id_personalsalud_foreign" FOREIGN KEY ("doc_identidad") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presenta" ADD CONSTRAINT "cod_sintoma_foreign" FOREIGN KEY ("cod_sintoma") REFERENCES "sintoma_efecto"("cod_sintoma") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presenta" ADD CONSTRAINT "id_vacuna_foreign" FOREIGN KEY ("id_vacuna") REFERENCES "vacuna"("id_vacuna") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requiere" ADD CONSTRAINT "cod_trat_foreign" FOREIGN KEY ("cod_trat") REFERENCES "tratamiento"("cod_trat") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requiere" ADD CONSTRAINT "id_paciente_foreign" FOREIGN KEY ("id_paciente") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reside" ADD CONSTRAINT "cod_municipio_foreign" FOREIGN KEY ("cod_municipio") REFERENCES "municipio"("cod_municipio") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reside" ADD CONSTRAINT "doc_identidad_foreign" FOREIGN KEY ("doc_identidad") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tiene" ADD CONSTRAINT "cod_sintoma_foreign" FOREIGN KEY ("cod_sintoma") REFERENCES "sintoma_efecto"("cod_sintoma") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tiene" ADD CONSTRAINT "denom_oms_foreign" FOREIGN KEY ("denom_oms") REFERENCES "virus_variante"("denom_oms") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacuna" ADD CONSTRAINT "cod_pais_foreign" FOREIGN KEY ("cod_pais") REFERENCES "pais"("cod_pais") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacunada" ADD CONSTRAINT "cod_centro_foreign" FOREIGN KEY ("cod_centro") REFERENCES "centro_salud"("cod_centro") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacunada" ADD CONSTRAINT "doc_identidad_foreign" FOREIGN KEY ("doc_identidad") REFERENCES "persona"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacunada" ADD CONSTRAINT "id_psalud_foreign" FOREIGN KEY ("id_psalud") REFERENCES "personal_salud"("doc_identidad") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacunada" ADD CONSTRAINT "id_vacuna_foreign" FOREIGN KEY ("id_vacuna") REFERENCES "vacuna"("id_vacuna") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "virus_variante" ADD CONSTRAINT "cod_pais_foreign" FOREIGN KEY ("cod_pais") REFERENCES "pais"("cod_pais") ON DELETE NO ACTION ON UPDATE CASCADE;
