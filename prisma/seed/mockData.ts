import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b7a7c5ec-f404-4aa8-aa0d-8bc5f1b3bde3', '1Billie.Kunde41@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2aed80c7-4a5a-49e8-9002-64ac74146287', '9Billie_Schroeder71@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3b1d5a54-3f24-44f7-9df1-9efef645c5d4', '25Heaven.Waelchi@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3ad15b3d-0dea-4869-a2fc-3cf234c88f55', '33Jaqueline_Weimann@gmail.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('5082978e-ccdf-4ad8-bfe1-c089145fec46', '41Kasey_Leuschke-Borer94@hotmail.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55', '49Keyon14@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('33bb16f7-e0dd-4876-8876-fd498069885b', '57Alena_Monahan48@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('454f13f3-d37a-4bdf-8b16-23b5c29e3cce', '65Jeffry.Carter57@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6d453279-a2b1-4382-8fb3-343b37bbe1f1', '73Tressie_Wisoky@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('bd5cf6e7-3e77-494c-b088-86ee06abe596', 'Join our mailing list for exclusive insights and tips.', '454f13f3-d37a-4bdf-8b16-23b5c29e3cce');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('141c36c8-3084-426c-820c-809b06b7582d', 'Stay informed with our latest announcements and offers.', '3b1d5a54-3f24-44f7-9df1-9efef645c5d4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8ed9ecb8-713d-4813-9c72-3677337adafa', 'Stay informed with our latest announcements and offers.', '3b1d5a54-3f24-44f7-9df1-9efef645c5d4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('61da612e-3012-493b-acdf-e6ad9d087bf6', 'Get the latest news and updates directly to your inbox.', '3b1d5a54-3f24-44f7-9df1-9efef645c5d4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('42d6c5e9-556c-401d-b26a-187c3a497aee', 'Join our mailing list for exclusive insights and tips.', 'b7a7c5ec-f404-4aa8-aa0d-8bc5f1b3bde3');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('464cad9f-f395-4d1b-943f-72478ac1e403', 'Stay informed with our latest announcements and offers.', '3ad15b3d-0dea-4869-a2fc-3cf234c88f55');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('054ceaa7-ff03-4209-909c-d505268defb1', 'Stay informed with our latest announcements and offers.', '3b1d5a54-3f24-44f7-9df1-9efef645c5d4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2fda1c45-0e4b-4172-b952-0fbc7588645f', 'Join our mailing list for exclusive insights and tips.', '3ad15b3d-0dea-4869-a2fc-3cf234c88f55');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1ed345b9-9794-48a7-a77e-d693d7c3648c', 'Stay informed with our latest announcements and offers.', '33bb16f7-e0dd-4876-8876-fd498069885b');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3bae4879-9fbb-4718-80ae-ccf0ca77f7ac', 'Stay informed with our latest announcements and offers.', '5082978e-ccdf-4ad8-bfe1-c089145fec46');

INSERT INTO "Category" ("id", "name", "description") VALUES ('4b896cdd-3ecd-4e3f-a540-03b3b8b7acab', 'Human Resources', 'Processes involved in creating and maintaining software.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('4c8e06ae-31ed-42fa-b6dd-d0c7a75eb198', 'Human Resources', 'Processes involved in creating and maintaining software.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('2dbcef46-7de9-44ee-9a43-ed2b4e22e1be', 'Project Management', 'Approaches to promoting and selling products or services.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('c179c1a6-fc0e-4584-af8c-14d5069a1281', 'Project Management', 'Approaches to promoting and selling products or services.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('d63ea730-2955-4783-9d01-f764da69d37a', 'Marketing Strategies', 'Processes involved in creating and maintaining software.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('8ce58832-5c7a-46ff-aee0-31186772a082', 'Financial Planning', 'Techniques and tools for managing projects effectively.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('2183a171-c4ce-4002-9215-7b70ec0f04d2', 'Financial Planning', 'Processes involved in creating and maintaining software.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('cbe1f418-6d40-4c00-948b-59c7f9d57b46', 'Project Management', 'Methods for managing finances and budgeting.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('bc75bcd1-3bda-40bd-aedc-124e04fdd8fa', 'Marketing Strategies', 'Methods for managing finances and budgeting.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('170497ad-b464-4c83-98de-d7e78a79b1b1', 'Software Development', 'Methods for managing finances and budgeting.');

INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('a5007214-9bd6-41b8-ac2c-fba40f71e42e', 'Customer Support', 'Designing products that meet user needs and preferences.', '8ce58832-5c7a-46ff-aee0-31186772a082');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('f3890a9d-484a-4322-aa67-0b61a0990c23', 'Product Design', 'Analyzing financial data to guide business decisions.', 'd63ea730-2955-4783-9d01-f764da69d37a');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('df1a5059-8158-45a1-b941-874283e46d22', 'Customer Support', 'Developing strategies to promote products and services.', 'd63ea730-2955-4783-9d01-f764da69d37a');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('be8811be-ae77-4274-a547-42995cd34f7d', 'Customer Support', 'Techniques and tools for managing projects effectively.', '2183a171-c4ce-4002-9215-7b70ec0f04d2');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('4a531aa9-b189-48b6-8ec5-1124a492b318', 'Project Management', 'Developing strategies to promote products and services.', '8ce58832-5c7a-46ff-aee0-31186772a082');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('c00532e1-5df3-4c7f-a59c-dce472fdfdde', 'Marketing Strategy', 'Designing products that meet user needs and preferences.', '4c8e06ae-31ed-42fa-b6dd-d0c7a75eb198');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('b090ee5f-09d8-4a73-8f18-ce56be7abdd4', 'Product Design', 'Designing products that meet user needs and preferences.', '4b896cdd-3ecd-4e3f-a540-03b3b8b7acab');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('3a29d22b-8a77-4dc9-bc21-c66c08d177b2', 'Financial Analysis', 'Developing strategies to promote products and services.', '170497ad-b464-4c83-98de-d7e78a79b1b1');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('bb7a12b2-76c7-414a-a42d-950ecbb346b4', 'Product Design', 'Developing strategies to promote products and services.', 'd63ea730-2955-4783-9d01-f764da69d37a');
INSERT INTO "Subcategory" ("id", "name", "description", "categoryId") VALUES ('4032131b-8fd2-41d0-b851-0503754356e7', 'Project Management', 'Providing assistance and support to customers.', '170497ad-b464-4c83-98de-d7e78a79b1b1');

INSERT INTO "RoleData" ("id", "name", "description") VALUES ('a7b05512-2b33-4131-b842-4153e98a9515', 'Moderator', 'Actively engages in the discussion providing input and feedback.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('77cf7d94-fdc0-4b5b-bcae-f62f3d7268f2', 'Moderator', 'Watches the discussion without participating taking notes if necessary.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('23f0e894-c08c-4777-ab0d-0d12b0afb092', 'Observer', 'Offers expertise and resources to support the discussions objectives.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('f8175b08-ae03-4a88-b118-3efe061fa8e3', 'Observer', 'Actively engages in the discussion providing input and feedback.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('20aecc72-417d-4fe0-a305-759eb9f10f18', 'Contributor', 'Watches the discussion without participating taking notes if necessary.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('27accb09-125b-4bcc-8939-933d0223942d', 'Observer', 'Responsible for overseeing the discussion and ensuring rules are followed.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('d526ad9b-f9c7-48c8-9481-3041ab643082', 'Moderator', 'Actively engages in the discussion providing input and feedback.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('a95aab57-756e-48cb-a33e-9d4bdfe96793', 'Participant', 'Actively engages in the discussion providing input and feedback.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('7d92af1f-11f6-4461-8072-8b93b9d2a2d6', 'Moderator', 'Responsible for overseeing the discussion and ensuring rules are followed.');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('0bb4a70f-6502-40d7-80fd-0a1e8abd4b07', 'Facilitator', 'Offers expertise and resources to support the discussions objectives.');

INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('937bed8c-f019-4326-98e8-0f8950a93037', 'Sustainable Business Practices', '6d453279-a2b1-4382-8fb3-343b37bbe1f1');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('aed51549-17ac-40f6-b444-27194eff8edf', 'Future of Remote Work', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('03afc7a5-731e-467e-9667-7b1d9bca4d17', 'Future of Remote Work', '6d453279-a2b1-4382-8fb3-343b37bbe1f1');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('3708e784-ad62-460e-ad09-6cb5462e31cd', 'Sustainable Business Practices', '6d453279-a2b1-4382-8fb3-343b37bbe1f1');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('5574f8f3-9051-48dc-9fd0-37cd3cfd867c', 'Digital Privacy Concerns', '7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('2ac7b33f-5687-41f2-92bb-c1d3ab4a1978', 'AI in Healthcare', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('3da129c2-45c5-4093-91a6-23d44b902537', 'AI in Healthcare', '5082978e-ccdf-4ad8-bfe1-c089145fec46');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('8c743566-4815-49f2-8fc2-bcdcd33ee006', 'Digital Privacy Concerns', '3ad15b3d-0dea-4869-a2fc-3cf234c88f55');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('5c6bffd1-9a88-440c-b5f0-68ac2e5a7126', 'Digital Privacy Concerns', '7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55');
INSERT INTO "Discussion" ("id", "title", "userId") VALUES ('517129dc-6c84-45c2-9a61-f1d09da18e62', 'AI in Healthcare', '6d453279-a2b1-4382-8fb3-343b37bbe1f1');

INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('df6388d8-fc1f-45bc-a055-f747e06e93bf', 'Lets schedule a meeting to discuss the next steps.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '517129dc-6c84-45c2-9a61-f1d09da18e62');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('af9c02fa-9efb-492b-a9fa-2ebbd4839882', 'Hey have you had a chance to review the latest draft', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('010fbc1d-a088-44fd-8c9f-cb4b082395ea', 'Can you provide more details on the requirements', '7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55', '2ac7b33f-5687-41f2-92bb-c1d3ab4a1978');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('a1fdd3ca-7707-4ca2-9bed-c0988fff300f', 'Hey have you had a chance to review the latest draft', '5082978e-ccdf-4ad8-bfe1-c089145fec46', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('affef0fe-c9ad-4555-bdf3-e29f2cb9bb17', 'Please let me know if you have any questions or concerns.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3da129c2-45c5-4093-91a6-23d44b902537');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('9f8a63fd-904e-4878-91f1-9b71bc4a0c22', 'Lets schedule a meeting to discuss the next steps.', '2aed80c7-4a5a-49e8-9002-64ac74146287', '937bed8c-f019-4326-98e8-0f8950a93037');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('4f7797dc-01aa-4874-9efc-0b127ff5c5fa', 'Can you provide more details on the requirements', '6d453279-a2b1-4382-8fb3-343b37bbe1f1', '937bed8c-f019-4326-98e8-0f8950a93037');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('d267b049-83e0-491e-bdb0-f5d4dfab48f9', 'I think we should consider a different approach for this project.', '454f13f3-d37a-4bdf-8b16-23b5c29e3cce', '3da129c2-45c5-4093-91a6-23d44b902537');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('9540cca5-8a6f-40f2-a221-be80af458655', 'Lets schedule a meeting to discuss the next steps.', '454f13f3-d37a-4bdf-8b16-23b5c29e3cce', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Message" ("id", "content", "userId", "discussionId") VALUES ('bbb14e27-fc46-4bc9-ad38-16342b78df02', 'I think we should consider a different approach for this project.', 'b7a7c5ec-f404-4aa8-aa0d-8bc5f1b3bde3', '3da129c2-45c5-4093-91a6-23d44b902537');

INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('c38d3025-d394-40ff-94e7-29eec8e2fe56', '5082978e-ccdf-4ad8-bfe1-c089145fec46', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c', 'f8175b08-ae03-4a88-b118-3efe061fa8e3');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('ce36a8f5-16bd-4d1a-88ea-88b11f8c2b04', '2aed80c7-4a5a-49e8-9002-64ac74146287', '5c6bffd1-9a88-440c-b5f0-68ac2e5a7126', '27accb09-125b-4bcc-8939-933d0223942d');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('59f7ba8b-712e-4622-91c9-0cae88b367cc', '2aed80c7-4a5a-49e8-9002-64ac74146287', '517129dc-6c84-45c2-9a61-f1d09da18e62', '20aecc72-417d-4fe0-a305-759eb9f10f18');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('a64111a8-19e4-4a57-a39f-5cd0feb7cb9a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c', '27accb09-125b-4bcc-8939-933d0223942d');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('c1581fa5-e19d-4d60-bae2-d9d99f8ab529', '5082978e-ccdf-4ad8-bfe1-c089145fec46', '2ac7b33f-5687-41f2-92bb-c1d3ab4a1978', 'f8175b08-ae03-4a88-b118-3efe061fa8e3');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('e55c900e-d7d3-40b9-96d2-1033fecd4b39', '3ad15b3d-0dea-4869-a2fc-3cf234c88f55', '2ac7b33f-5687-41f2-92bb-c1d3ab4a1978', '23f0e894-c08c-4777-ab0d-0d12b0afb092');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('13a3ccb6-9f8f-4d93-927b-4a145d8e6c58', '454f13f3-d37a-4bdf-8b16-23b5c29e3cce', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c', '0bb4a70f-6502-40d7-80fd-0a1e8abd4b07');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('8b3691fe-de66-4804-88c2-827b69aa571c', '7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55', 'aed51549-17ac-40f6-b444-27194eff8edf', 'a95aab57-756e-48cb-a33e-9d4bdfe96793');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('d9f3e4bb-140c-4b64-b58f-9c97174a8b33', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '517129dc-6c84-45c2-9a61-f1d09da18e62', '77cf7d94-fdc0-4b5b-bcae-f62f3d7268f2');
INSERT INTO "Participant" ("id", "userId", "discussionId", "roleId") VALUES ('263309af-41b2-4f7e-896a-62e7211331c7', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'aed51549-17ac-40f6-b444-27194eff8edf', '7d92af1f-11f6-4461-8072-8b93b9d2a2d6');

INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('a91678b9-4d51-47b8-b1f8-10ae87639d97', 'I found the AI assistant very helpful in summarizing discussions.', 18, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('881d4875-9ade-4a8a-b047-f43e514815d3', 'I found the AI assistant very helpful in summarizing discussions.', 186, '2aed80c7-4a5a-49e8-9002-64ac74146287', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('f2b12f78-d5f7-49c2-ac86-25be93364d10', 'I found the AI assistant very helpful in summarizing discussions.', 622, '3b1d5a54-3f24-44f7-9df1-9efef645c5d4', '937bed8c-f019-4326-98e8-0f8950a93037');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('2c7e29ed-1807-4368-a1ed-0b197c01c500', 'The design is clean but I would like more customization options.', 709, '7f4002e0-d976-4b67-ba6d-7c5c2d0ffb55', '937bed8c-f019-4326-98e8-0f8950a93037');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('555f4323-555c-4074-8305-72ebb00d836f', 'I found the AI assistant very helpful in summarizing discussions.', 931, '454f13f3-d37a-4bdf-8b16-23b5c29e3cce', 'aed51549-17ac-40f6-b444-27194eff8edf');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('ba43cb1c-8f86-4617-9d47-976d1a3d24bd', 'Some features are not very clear and need better documentation.', 995, '2aed80c7-4a5a-49e8-9002-64ac74146287', 'aed51549-17ac-40f6-b444-27194eff8edf');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('027c8cc7-0eed-4a88-b400-7e4e00d73678', 'I found the AI assistant very helpful in summarizing discussions.', 320, 'b7a7c5ec-f404-4aa8-aa0d-8bc5f1b3bde3', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('927ae7cf-a3f8-4551-a170-2eed50fd74f6', 'The design is clean but I would like more customization options.', 514, '2aed80c7-4a5a-49e8-9002-64ac74146287', '937bed8c-f019-4326-98e8-0f8950a93037');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('8ffa97df-85e1-4e78-b448-e03b4d2f0535', 'Some features are not very clear and need better documentation.', 973, '454f13f3-d37a-4bdf-8b16-23b5c29e3cce', '8c743566-4815-49f2-8fc2-bcdcd33ee006');
INSERT INTO "Feedback" ("id", "content", "rating", "userId", "discussionId") VALUES ('1d9f2785-eee8-42d8-a379-826b6d0c27c2', 'The app is intuitive and easy to navigate.', 18, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8c743566-4815-49f2-8fc2-bcdcd33ee006');

INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('c706f1e9-1cb9-4d40-8e85-290a8d204c38', 'Agreement on project timeline and milestones.', 'Abandoned', '3708e784-ad62-460e-ad09-6cb5462e31cd');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('6574b14d-d66a-4664-bed6-f3ef11f9d312', 'Final terms for partnership established.', 'Draft', '03afc7a5-731e-467e-9667-7b1d9bca4d17');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('33494ca1-eb74-49c1-bc61-6adc0fba3cfb', 'Agreement on project timeline and milestones.', 'In Review', '03afc7a5-731e-467e-9667-7b1d9bca4d17');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('f8e3f660-e222-43ce-83ec-23a762fca625', 'Consensus reached on budget allocation.', 'Finalised', '03afc7a5-731e-467e-9667-7b1d9bca4d17');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('528ad3fc-ff17-42f4-abdc-50b41fbbedc1', 'Final terms for partnership established.', 'Draft', '2ac7b33f-5687-41f2-92bb-c1d3ab4a1978');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('1be6e229-c93d-4f67-906b-cd0be367dad3', 'Consensus reached on budget allocation.', 'Pending', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('e0d2c95e-8025-44d9-8b0a-0d3c0eef1115', 'Mutual understanding on deliverables and deadlines.', 'Pending', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('70fb80b2-9467-4019-a022-6a99cad43ee1', 'Agreement on roles and responsibilities.', 'Finalised', '5574f8f3-9051-48dc-9fd0-37cd3cfd867c');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('b35fc8c0-fd71-46a6-8a7d-2165c93b198b', 'Final terms for partnership established.', 'Draft', '517129dc-6c84-45c2-9a61-f1d09da18e62');
INSERT INTO "Agreement" ("id", "content", "status", "discussionId") VALUES ('48524e9e-5893-4c72-80a1-9d6af97930d7', 'Agreement on roles and responsibilities.', 'In Review', '3708e784-ad62-460e-ad09-6cb5462e31cd');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
