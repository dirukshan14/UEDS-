import { PrismaClient, ContentType, MemberGroup } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ueds.org';
  const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe123!';
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash,
      name: 'Administrator'
    }
  });

  // Site settings (singleton)
  await prisma.siteSettings.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      orgNameEn: 'Upcountry Education Development Society',
      orgNameTa: 'மலைநாட்டு கல்வி அபிவிருத்தி சங்கம்',
      orgNameSi: 'උඩරට අධ්‍යාපන සංවර්ධන සංගමය',
      addressEn: '123 Dimbula Road, Hatton, Sri Lanka',
      addressTa: '123 டிம்புலா வீதி, ஹற்றன், இலங்கை',
      addressSi: '123 ඩිම්බුලා පාර, හැටන්, ශ්‍රී ලංකාව',
      phone: '+94 51 222 3344',
      officeEmail: process.env.OFFICE_EMAIL || 'office@ueds.org',
      mapEmbedUrl: 'https://www.google.com/maps?q=Hatton+Sri+Lanka&output=embed',
      bankName: 'Bank of Ceylon',
      bankBranch: 'Hatton Branch',
      bankAccountName: 'Upcountry Education Development Society',
      bankAccountNumber: '0000123456789',
      bankSwiftCode: 'BCEYLKLX',
      facebookUrl: 'https://facebook.com',
      youtubeUrl: 'https://youtube.com',
      regNumber: 'XXXXX'
    }
  });

  // Board members
  const boardMembers = [
    { nameEn: 'A. B. Perera', nameTa: 'ஏ. பி. பெரேரா', nameSi: 'ඒ. බී. පෙරේරා', designationEn: 'Chairperson', designationTa: 'தலைவர்', designationSi: 'සභාපති' },
    { nameEn: 'S. Kumar', nameTa: 'எஸ். குமார்', nameSi: 'එස්. කුමාර්', designationEn: 'Vice Chairperson', designationTa: 'துணைத் தலைவர்', designationSi: 'උප සභාපති' },
    { nameEn: 'N. Silva', nameTa: 'என். சில்வா', nameSi: 'එන්. සිල්වා', designationEn: 'Treasurer', designationTa: 'பொருளாளர்', designationSi: 'භාණ්ඩාගාරික' }
  ];
  for (let i = 0; i < boardMembers.length; i++) {
    const m = boardMembers[i];
    await prisma.member.create({
      data: { ...m, group: MemberGroup.BOARD, order: i }
    });
  }

  // Committee members
  const committeeMembers = [
    { nameEn: 'R. Fernando', nameTa: 'ஆர். பெர்னாண்டோ', nameSi: 'ආර්. ප්‍රනාන්දු', designationEn: 'Secretary', designationTa: 'செயலாளர்', designationSi: 'ලේකම්' },
    { nameEn: 'T. Raj', nameTa: 'டி. ராஜ்', nameSi: 'ටී. රාජ්', designationEn: 'Committee Member', designationTa: 'குழு உறுப்பினர்', designationSi: 'කමිටු සාමාජික' }
  ];
  for (let i = 0; i < committeeMembers.length; i++) {
    const m = committeeMembers[i];
    await prisma.member.create({
      data: { ...m, group: MemberGroup.COMMITTEE, order: i }
    });
  }

  // Sample content items
  await prisma.contentItem.create({
    data: {
      type: ContentType.PROJECT_DONE,
      slug: 'hatton-primary-roof',
      titleEn: 'A new roof for Hatton Primary',
      titleTa: 'ஹற்றன் ஆரம்பப் பள்ளிக்கு புதிய கூரை',
      titleSi: 'හැටන් ප්‍රාථමික පාසලට නව වහලයක්',
      summaryEn: '120 children now learn in a dry classroom for the first time in six years.',
      summaryTa: '',
      summarySi: '',
      descriptionEn: 'Full details of the roof renovation project at Hatton Primary School, funded entirely by local donors and completed in March.',
      descriptionTa: '',
      descriptionSi: '',
      published: true,
      featured: true
    }
  });

  await prisma.contentItem.create({
    data: {
      type: ContentType.PROJECT_NEEDED,
      slug: 'estate-school-scholarships-2026',
      titleEn: "2026 Estate-School Scholarship Round",
      titleTa: '',
      titleSi: '',
      summaryEn: '42 scholarships are funded. 18 more students are waiting.',
      descriptionEn: 'We are raising funds to support 18 additional students from estate schools with scholarships covering fees, materials and transport.',
      targetAmount: 1400000,
      raisedAmount: 890000,
      published: true,
      featured: true
    }
  });

  await prisma.contentItem.create({
    data: {
      type: ContentType.NEWS,
      slug: 'community-library-maskeliya-opening',
      titleEn: "Maskeliya's first community library opened its doors",
      descriptionEn: 'A reading space built with three estate communities, now open six days a week.',
      published: true
    }
  });

  await prisma.contentItem.create({
    data: {
      type: ContentType.GALLERY,
      slug: 'prize-giving-2025',
      titleEn: 'Annual Prize Giving 2025',
      published: true
    }
  });

  console.log('Seed complete.');
  console.log(`Admin login -> email: ${adminEmail}  password: ${adminPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
