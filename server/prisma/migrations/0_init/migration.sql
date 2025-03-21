-- CreateTable
CREATE TABLE `business_open_close_stats` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `trdar_cd` VARCHAR(20) NULL,
    `trdar_cd_nm` VARCHAR(100) NULL,
    `trdar_se_cd` VARCHAR(20) NULL,
    `trdar_se_cd_nm` VARCHAR(100) NULL,
    `svc_induty_cd` VARCHAR(20) NULL,
    `svc_induty_cd_nm` VARCHAR(100) NULL,
    `stor_co` INTEGER NULL,
    `opbiz_stor_co` INTEGER NULL,
    `clsbiz_stor_co` INTEGER NULL,
    `frc_stor_co` INTEGER NULL,
    `similr_induty_stor_co` INTEGER NULL,
    `opbiz_rt` FLOAT NULL,
    `clsbiz_rt` FLOAT NULL,
    `stdr_yyqu_cd` VARCHAR(10) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

