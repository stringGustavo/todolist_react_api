-- CreateTable
CREATE TABLE `tsk_tasks` (
    `tsk_id` BIGINT NOT NULL AUTO_INCREMENT,
    `tsk_name` VARCHAR(255) NOT NULL,
    `tsk_description` TEXT NOT NULL,
    `tsk_date` DATE NOT NULL,
    `tsk_prioriry` TINYINT NOT NULL,

    PRIMARY KEY (`tsk_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
