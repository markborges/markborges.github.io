---
title: BC 20 Upgrades (BC 2022 Wave 1)
date: 2022-03-16 23:30:57
categories:
  - Functional
author:
tags:
inspiration_source: Dynamics 365 Business Central 2022 Wave 1 Release
inspiration_source_link: https://docs.microsoft.com/en-us/dynamics365-release-plan/2022wave1/smb/dynamics365-business-central/
github_discussion: https://github.com/markborges/markborges.github.io/discussions/4
github_feedback: true
hidden: true
---
Another April is coming, and Microsoft is getting all ready to deploy the 2022 Wave 1 Release for their whole Dynamics 365 family of products. For us, this means only one thing: **BC 20 is here!** 🎉🎊🎈
<!--more-->

These major upgrades usually get a lot of content, because they affect multiple areas that support the whole Business Central ecosystem. Not only we get tons of Functional (Application) upgrades, but we also get upgrades on Power Apps, Power Automate, Power BI, BC integration with Office 365, BC integration with Teams, the AL Language itself, and a quite a few tools for IT admins to manage this whole engine. ⚙

On this post, I'm going to be focusing more and highlighting some of the Functional (Application) upgrades coming to this version. **Tip**: On each section, you can click on that section's title to go right into the Microsoft documentation for that feature.

# (G/L) [Blocking Deletion of G/L Accounts](https://docs.microsoft.com/en-us/dynamics365-release-plan/2022wave1/smb/dynamics365-business-central/blocking-deletion-gl-accounts)
A while ago, Microsoft introduced a field on the General Ledger Setup, called **Check G/L Acc. Deletion After**, that, upon trying to delete a G/L Account, if that account had entries after that date, BC would ask if the user really wanted to delete that G/L Account. This is pretty useful for those countries that have a retention policy over the number of Years that some data must be stored. However, like many things in BC, this setting was not bullet proof: users could simply confirm they wanted to delete (maybe by mistake, whooops 😢), and then BC would delete the account. 💫

Now, BC is introducing a flag (**Block Deletion of G/L Accounts**) that, when turned on, will hard-block the deletion of such G/L Accounts. If the deletion is really needed, an admin, or any other user with access to the **General Ledger Setup** will be able to turn that off, proceed with the deletion, and turn that back on:
![Block Deletion of G/L Accounts on **General Ledger Setup**](2022-03-16-BC-20-Upgrades-BC-2022-Wave-1/BC20-BlockDeletion.png)

# (G/L) [Auto-accept transactions for intercompany journals](https://docs.microsoft.com/en-us/dynamics365-release-plan/2022wave1/smb/dynamics365-business-central/intercompany-postings-have-auto-accept-transaction-enabled-intercompany-general-journals)
For those who use Intercompany Transactions, you understand the pain in having to click a thousand times to be able to send and receive documents and general journal lines between the different companies.

Well, after a bit over 3 years (with the BC idea having been submitted in November 2018), Microsoft heard your pains, and they are revamping the Intercompany Experience. Now, just like Purchase and Sales documents, Journal Lines will be able to be automatically accepted on the recipient company.

🔺**Note**🔺: This feature requires that you turn on a new Feature on the Feature Management. As stated on Microsoft's documentation, if you don't enable this new feature, you will see two search results for **Intercompany Setup**, *temporarily* until BC 23 (2023 Wave 2) 😲, when this feature is supposed to kick in automatically.

On the new **Intercompany Setup** you will be able to setup a default **Journal Template** and **Journal Batch** for these transactions.

![New IC Setup](2022-03-16-BC-20-Upgrades-BC-2022-Wave-1/BC20-ICSetup.png)

# (Jobs) [Allow the sell-to and bill-to customers to be different for jobs](https://docs.microsoft.com/en-us/dynamics365-release-plan/2022wave1/smb/dynamics365-business-central/allow-sell-to-bill-to-customers-be-different-jobs)
I usually don't work with the Jobs module, to be honest, but this one sounds like an exciting new feature.

Just like the regular Sales Order structure, BC will now have a **Sell-to** and a **Ship-to** customer information together with the **Bill-to** customer information that already existed. This will allow the project manager to route invoicing and the rendering of services accordingly. This will probably make life easier, if your Jobs are entered in BC way before they actually take place. PMs will no longer need to keep memory of these details, they will just be able to enter directly on the Job details.

Last, but not least, 4 very important fields have also been added: **Your Reference**, **External Document No.**, **Payment Terms Code**, and **Payment Method Code**.

# (Finance) [Create bank deposits](https://docs.microsoft.com/en-us/dynamics365-release-plan/2022wave1/smb/dynamics365-business-central/bank-deposits)
I have to confess this was a little puzzling to me at first, because **Deposits** have been a thing in the North American version of Navision and Business Central for quite a while, that I even forgot this was **only** available on the NA version. So, why would this be a "new" feature? 😵  (US/CA/MX readers keep reading for 2 important notes on this! -- Lump sum and how data will be migrated to new tables)

Well, I'm glad to hear this has been promoted to a global level, because this is a pretty nice feature for Finance users. Deposits make it easier to keep track of those lump-sum transactions that usually comes on Bank Statements as "Deposit" and nobody knows what-on-earth is inside that one big payment. Of course, finance users have found different ways of dealing with this, using the different journals available in BC, maybe some companies in some other countries even created ISVs for this (I don't know, do you?), but now, you will have a better way of handling deposits.

In a nutshell, Deposits have a header-lines structure, so that you can enter general information on the header (such as **Bank Account No.**, **Total Deposit Amount**, **Posting Date** and **Dimensions**), and then identify on the lines, which documents are part of such deposit. Such lines can be checks from customers, cash sales revenues, or refunds from vendors. Prior to posting a deposit, the total amount on the lines must match the total deposit amount on the header.

One feature that is new from the NA Version, is the **Post as Lump Sum** : **** Check what this does *****


**** Check how historical NA Deposits data will translate into new global BC Deposits ****