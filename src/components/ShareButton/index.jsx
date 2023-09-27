import Link from 'next/link';
import { Wrapper } from './ShareButton.styles';
import { useRouter } from 'next/router';
import { baseURL } from '../../config/constant';
import clipboardCopy from 'clipboard-copy';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const ShareButton = ({ Icon, children, link, message, copyLink }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const url = link + baseURL + router.asPath;
  const [tooltipVisible, setTooltipVisible] = useState(false); // State for tooltip visibility

  const copyLinkHandler = (e) => {
    e.preventDefault();
    clipboardCopy(baseURL + router.asPath)
      .then(() => {
        setTooltipVisible(true); // Show the tooltip
        setTimeout(() => setTooltipVisible(false), 2000);
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  return (
    <>
      <Wrapper
        onClick={copyLink ? copyLinkHandler : null}
        as={copyLink ? 'button' : 'a'}
        href={copyLink ? null : url}
        target={copyLink ? null : '_blank'}
        data-tooltip-id={copyLink ? 'my-tooltip' : ''}
        data-tooltip-place="right"
      >
        {Icon && <Icon />}
        {children}
        {copyLink && (
          <Tooltip
            id="my-tooltip"
            content={t('linkcopied')}
            isOpen={tooltipVisible}
          />
        )}
      </Wrapper>
    </>
  );
};

export default ShareButton;
