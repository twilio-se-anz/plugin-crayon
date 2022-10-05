import React from "react";
import { Box, Text, Table, TBody, Td, Th, THead, Tr } from "@twilio-paste/core";

import { FileIcon } from "@twilio-paste/icons/esm/FileIcon";
import { VoiceCapableIcon } from "@twilio-paste/icons/esm/VoiceCapableIcon";
import { EmailIcon } from "@twilio-paste/icons/esm/EmailIcon";

const FauxHistory = () => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Previous Interactions</Th>
          <Th textAlign="right">When</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Text as="span" display={"flex"}>
              <FileIcon decorative={true} about="Channel" />
              <Box marginLeft="space40">Invoice for $243.10 due in 20 days</Box>
            </Text>
          </Td>
          <Td textAlign="right">2 Days ago</Td>
        </Tr>

        <Tr>
          <Td>
            <Text as="span" display={"flex"}>
              <VoiceCapableIcon decorative={true} about="Channel" />
              <Box marginLeft="space40">Inbound voice call lasting 03:13</Box>
            </Text>
          </Td>
          <Td textAlign="right">3 Days ago</Td>
        </Tr>

        <Tr>
          <Td>
            <Text as="span" display={"flex"}>
              <EmailIcon decorative={true} about="Channel" />
              <Box marginLeft="space40">
                Outbound email subject: Upcoming invoice reminder
              </Box>
            </Text>
          </Td>
          <Td textAlign="right">10 Days ago</Td>
        </Tr>

        <Tr>
          <Td>
            <Text as="span" display={"flex"}>
              <VoiceCapableIcon decorative={true} about="Channel" />
              <Box marginLeft="space40">
                Outbound voice campaign call: Marketing H2 Leads
              </Box>
            </Text>
          </Td>
          <Td textAlign="right">30 Days ago</Td>
        </Tr>

        <Tr>
          <Td>
            <Text as="span" display={"flex"}>
              <VoiceCapableIcon decorative={true} about="Channel" />
              <Box marginLeft="space40">
                Outbound voice campaign call: Marketing H1 Leads
              </Box>
            </Text>
          </Td>
          <Td textAlign="right">183 Days ago</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

export default FauxHistory;
