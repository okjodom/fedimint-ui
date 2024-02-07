import React from 'react';
import {
  Flex,
  Stack,
  useTheme,
  Heading,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { Network, Federation } from '@fedimint/types';
import { InfoCard, DepositCard, BalanceCard, WithdrawCard } from '.';
import { useTranslation } from '@fedimint/utils';

interface FederationCardProps {
  federation: Federation;
  network?: Network;
  lightning_pub_key: string;
}

export const FederationCard: React.FC<FederationCardProps> = ({
  federation,
  network,
  lightning_pub_key,
}) => {
  const { federation_id, balance_msat } = federation;

  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card w='100%' maxWidth='100%'>
      <CardBody>
        <Stack spacing='24px'>
          <Heading
            fontWeight='500'
            fontSize='24px'
            size='xs'
            color={theme.colors.gray[900]}
            fontFamily={theme.fonts.heading}
          >
            {t('header.title')}
          </Heading>
          <Flex
            gap='24px'
            flexDir={{ base: 'column', sm: 'column', md: 'row' }}
          >
            <BalanceCard
              balanceMsat={balance_msat}
              federationId={federation_id}
            />
            <InfoCard nodeId={lightning_pub_key} network={network} />
          </Flex>
          <Flex
            gap='24px'
            flexDir={{ base: 'column', sm: 'column', md: 'row' }}
          >
            <DepositCard federationId={federation_id} network={network} />
            <WithdrawCard
              federationId={federation_id}
              balanceMsat={balance_msat}
            />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
