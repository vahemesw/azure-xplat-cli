// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns>\r\n      <DnsServers>\r\n        <DnsServer name=\"dns-cli-1\" IPAddress=\"66.77.88.98\" />\r\n        <DnsServer name=\"dns-cli-25964\" IPAddress=\"66.77.88.82\" />\r\n      </DnsServers>\r\n    </Dns>\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"LocalNet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"tryaVnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.1.0/11</AddressPrefix>\r\n        </AddressSpace>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"&quot;my vnet name&quot;\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-1\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"classic-cli-vnet2\" Location=\"South Central US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>192.168.2.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"backend\">\r\n            <AddressPrefix>192.168.2.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet1871\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet6354\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet8837\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett4691\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"CliTestSubnett7798\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett7538\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett5063\">\r\n            <AddressPrefix>10.0.2.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett808\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett938\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett443\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnetVm1155\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"CliTestSubnetVm3431\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group test-roman-group ClassicVNet-2717\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"ClassicSubnet-2717\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MigrationNet\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"my network with whitespaces\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-1\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MyNetwork\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.32.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnet1\" Location=\"Southeast Asia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"testsubnet1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnetwork1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testvnet8981\" AffinityGroup=\"AG-CLI-05f8c31394d2a45b\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet with whitespaces\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-25964\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"VnetForGateway\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.1.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.1.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <Gateway>\r\n          <ConnectionsToLocalNetwork>\r\n            <LocalNetworkSiteRef name=\"LocalNet\">\r\n              <Connection type=\"IPsec\" />\r\n            </LocalNetworkSiteRef>\r\n          </ConnectionsToLocalNetwork>\r\n        </Gateway>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '9828',
  'content-type': 'text/plain',
  server: '1.0.6198.408 (rd_rdfe_stable.160802-0931) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e1d2e86c31de08af914172f79e857028',
  date: 'Fri, 12 Aug 2016 13:16:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns>\r\n      <DnsServers>\r\n        <DnsServer name=\"dns-cli-1\" IPAddress=\"66.77.88.98\" />\r\n        <DnsServer name=\"dns-cli-25964\" IPAddress=\"66.77.88.82\" />\r\n      </DnsServers>\r\n    </Dns>\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"LocalNet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"tryaVnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.1.0/11</AddressPrefix>\r\n        </AddressSpace>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"&quot;my vnet name&quot;\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-1\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"classic-cli-vnet2\" Location=\"South Central US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>192.168.2.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"backend\">\r\n            <AddressPrefix>192.168.2.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet1871\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet6354\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnet8837\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett4691\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"CliTestSubnett7798\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett7538\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett5063\">\r\n            <AddressPrefix>10.0.2.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett808\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett938\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett443\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnetVm1155\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"CliTestSubnetVm3431\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group test-roman-group ClassicVNet-2717\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"ClassicSubnet-2717\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MigrationNet\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"my network with whitespaces\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-1\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MyNetwork\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.32.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnet1\" Location=\"Southeast Asia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"testsubnet1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnetwork1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testvnet8981\" AffinityGroup=\"AG-CLI-05f8c31394d2a45b\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet with whitespaces\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <DnsServersRef>\r\n          <DnsServerRef name=\"dns-cli-25964\" />\r\n        </DnsServersRef>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"VnetForGateway\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.1.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.1.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <Gateway>\r\n          <ConnectionsToLocalNetwork>\r\n            <LocalNetworkSiteRef name=\"LocalNet\">\r\n              <Connection type=\"IPsec\" />\r\n            </LocalNetworkSiteRef>\r\n          </ConnectionsToLocalNetwork>\r\n        </Gateway>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '9828',
  'content-type': 'text/plain',
  server: '1.0.6198.408 (rd_rdfe_stable.160802-0931) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e1d2e86c31de08af914172f79e857028',
  date: 'Fri, 12 Aug 2016 13:16:52 GMT',
  connection: 'close' });
 return result; }]];