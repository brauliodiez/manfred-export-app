import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, RelevantLinkVm, ManfredRelevantLink } from './profile-section.vm';

const mapLinkTypeToVm = (linkType: ManfredRelevantLink['type']): RelevantLinkVm['type'] => {
  switch (linkType) {
    case 'website':
      return 'web';
    case 'other':
      return 'otros';
    default:
      return linkType as RelevantLinkVm['type'];
  }
};

export const mapRelevantLinksToVm = (relevantLinks: ManfredRelevantLink[]): RelevantLinkVm[] => {
  return relevantLinks.map(link => ({
    type: mapLinkTypeToVm(link.type),
    URL: link.URL,
    description: link.description,
  }));
};

export const mapFromMacCvToProfileSectionVm = (cv: ManfredAwesomicCV): ProfileSectionVm => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const title = cv?.aboutMe?.profile?.title ?? '';
  const description = cv?.aboutMe?.profile?.description ?? '';
  const fullname = `${name ?? ''} ${surnames ?? ''}`;
  const emails = (cv?.aboutMe?.profile?.contact?.contactMails as string[]) ?? [];
  const relevantLinks = cv?.aboutMe?.relevantLinks
    ? mapRelevantLinksToVm(cv.aboutMe.relevantLinks as ManfredRelevantLink[])
    : [];

  return {
    name,
    surnames,
    title,
    description,
    fullname,
    emails,
    relevantLinks,
  };
};
